import React, { useState, useContext } from 'react';
import EditParts from './EditParts';
import { EditContext } from '../pages/home';
import { remote } from 'electron';
import fs from 'fs';
import path from 'path';

const OutputFrame = () => {
  const [editdata, _] = useContext(EditContext);
  const [savepath, setSavePath] = useState<string>('');

  // 保存先フォルダ選択ボタン
  const onSelectSaveFolder = async () => {
    let dirnames = await remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ['openDirectory'],
      title: 'Select save folder',
      defaultPath: '.',
      filters: [{ name: 'text file', extensions: ['txt', 'csv'] }],
    });
    console.log('dirname=' + JSON.stringify(dirnames));
    const dir = dirnames['filePaths'].toString();
    setSavePath(dir);
  };

  // ファイル保存ボタン
  const onSave = async () => {
    console.log('onSave()');
    console.log(editdata);

    // 保存ファイルパス作成
    const element = document.getElementById('savefilename') as HTMLInputElement;
    const fname = element.value;
    const fpathname = path.join(savepath, fname);
    console.log(fpathname);

    // ファイル保存
    var msg;
    fs.writeFile(fpathname, editdata, (err) => {
      if (err) {
        console.log('fs.writeFile ERR!: ' + err);
        msg = 'ファイルの保存に失敗しました';
      } else {
        msg = 'ファイル保存しました！';
      }
      // メッセージボックス（モーダル）表示
      remote.dialog.showMessageBox(remote.getCurrentWindow(), {
        type: 'info',
        message: msg,
      });
    });
  };

  return (
    <React.Fragment>
      <div id="output-frame">
        <h3>エディット・ビュー</h3>
        <EditParts />
        <p>
          保存先フォルダ：
          <button onClick={onSelectSaveFolder}>選択</button>
        </p>
        <input id="savefolder" size={52} value={savepath} disabled={true} />
        <p>新しいファイル名：</p>
        <input id="savefilename" size={42} />
        <p>
          <button onClick={onSave}>ファイル保存</button>
        </p>
      </div>
      <style jsx>
        {`
          #output-frame {
            border: 1px solid #000000;
            width: 420px;
            height: 520px;
            margin: 10px;
            padding: 10px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default OutputFrame;
