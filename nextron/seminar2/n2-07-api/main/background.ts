import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';
import fetch from 'node-fetch';
import StellarSdk from 'stellar-sdk';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', {
    width: 1400,
    height: 700,
    backgroundColor: '80FFFFFF',
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on('window-all-closed', () => {
  app.quit();
});

ipcMain.handle('is-prod', (event: any, param: any) => {
  return isProd;
});

// fetch zip api
ipcMain.handle('call-zip', async (event: any, param: any) => {
  console.log('call-zip');
  const url = `http://api.thni.net/jzip/X0401/JSON/${param.ziphigh}/${param.ziplow}.js`;
  var res;
  try {
    const response = await fetch(url);
    res = await response.json();
    console.log('call-zip() EXEC-OK! :' + JSON.stringify(res));
  } catch (err) {
    console.log('call-zip() ERR! :' + err);
    res = err;
  }
  return res;
});

// call stellar-sdk
ipcMain.handle('call-stellar', async (event: any, param: any) => {
  console.log('call-stellar');

  const addr = 'GCH4YTNJD32H5KJM7Y2BHDOFCUAK2G57GC7NQUA5KFA7WGPMESWXIEGE';

  var transactionOption = {
    fee: StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET,
  };
  var batchOption = {
    fee: process.env.TX_FEE ? Number(process.env.TX_FEE) : StellarSdk.BASE_FEE,
    networkPassphrase: StellarSdk.Networks.TESTNET,
  };
  var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');

  const account = await server.loadAccount(addr);
  console.log(JSON.stringify(account));
  console.log(account.balances[0].balance);
  return account.balances[0].balance;
});
