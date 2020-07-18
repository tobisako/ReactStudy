import { screen, BrowserWindow, BrowserWindowConstructorOptions, dialog, app } from 'electron';
import Store from 'electron-store';

export default (windowName: string, options: BrowserWindowConstructorOptions): BrowserWindow => {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new Store({ name });
  const defaultSize = {
    width: options.width,
    height: options.height,
  };
  let state = {};
  let win;

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1],
    };
  };

  const windowWithinBounds = (windowState, bounds) => {
    return (
      windowState.x >= bounds.x &&
      windowState.y >= bounds.y &&
      windowState.x + windowState.width <= bounds.x + bounds.width &&
      windowState.y + windowState.height <= bounds.y + bounds.height
    );
  };

  const resetToDefaults = () => {
    const bounds = screen.getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2,
    });
  };

  const ensureVisibleOnSomeDisplay = (windowState) => {
    const visible = screen.getAllDisplays().some((display) => {
      return windowWithinBounds(windowState, display.bounds);
    });
    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }
    return windowState;
  };

  const onClose = (e) => {
    // ダイアログを閉じるボタンを押された事をサスペンドする。
    e.preventDefault();

    // 終了確認ダイアログ表示
    const ret = dialog.showMessageBoxSync(win, {
      type: 'info',
      message: 'アプリを終了してもよろしいですか？',
      buttons: ['OK', 'CANCEL'],
    });

    // 判定
    if (ret === 0) {
      e.defaultPrevented = false; // 終了を中断し、継続する。
      return;
    }

    // プロセス終了：後処理を行う
    saveState();
  };

  const saveState = () => {
    // 終了時の処理
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }
    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());

  const browserOptions: BrowserWindowConstructorOptions = {
    ...options,
    ...state,
    webPreferences: {
      nodeIntegration: true,
      ...options.webPreferences,
    },
  };
  win = new BrowserWindow(browserOptions);

  //win.on('close', saveState);
  win.on('close', onClose);

  return win;
};
