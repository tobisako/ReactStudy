import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { remote } from 'electron';
import fs from 'fs';
import path from 'path';
import util from 'util';
const readFileAsync = util.promisify(fs.readFile);

const Home = () => {
  const [readfilename, setReadfilename] = useState<string>(null);
  const [selectfolder, setSelectFolder] = useState<string>(null);

  // ファイルを開く
  const onOpen = async () => {
    let filenames = await remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ['openFile'],
      title: 'Select a file',
      defaultPath: '.',
      filters: [{ name: 'text file', extensions: ['txt', 'csv'] }],
    });
    console.log('filename=' + JSON.stringify(filenames));
    const fn = filenames['filePaths'].toString();
    appendLog('file: [' + fn + ']');
    setReadfilename(fn);

    // ファイルを読み込む
    // fs.readFile(fn, { encoding: 'utf-8' }, (err, data) => {
    //   if (err) {
    //     appendLog('fs.readFile ERR!: ' + err);
    //   } else {
    //     const area = document.getElementById('edit-area');
    //     area.textContent = data;
    //     appendLog('fs.readFile read');
    //   }
    // });

    // ファイルを読み込む（promise）
    try {
      const data = await readFileAsync(fn, { encoding: 'utf-8' });
      const area = document.getElementById('edit-area');
      area.textContent = data;
      appendLog('readFileAsync file read');
    } catch (err) {
      appendLog('readFileAsync ERR!: ' + err);
    }
  };

  // 保存先フォルダ選択
  const onSelectSaveFolder = async () => {
    let dirnames = await remote.dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ['openDirectory'],
      title: 'Select save folder',
      defaultPath: '.',
      filters: [{ name: 'text file', extensions: ['txt', 'csv'] }],
    });
    console.log('dirname=' + JSON.stringify(dirnames));
    const dir = dirnames['filePaths'].toString();
    appendLog('dir: [' + dir + ']');
    setSelectFolder(dir);
  };

  // ファイルに保存する
  const onSaveButton = () => {
    // 保存データをhtmlから読み込み
    const element_area = document.getElementById('edit-area') as HTMLInputElement;
    const data = element_area.value;

    // 保存ファイルパス作成
    const element_fname = document.getElementById('savefilename') as HTMLInputElement;
    const fname = element_fname.value;
    const savepath = path.join(selectfolder, fname);
    appendLog('savepath: ' + savepath);

    // 保存
    fs.writeFile(savepath, data, (err) => {
      if (err) {
        appendLog('fs.writeFile ERR!: ' + err);
      } else {
        appendLog('file write!');
      }
    });
  };

  useEffect(() => {
    clearLog();
  }, []);

  const appendLog = (msg) => {
    const li = document.createElement('li');
    li.innerHTML = msg;
    document.getElementById('console-messages').appendChild(li);
    document.getElementById('console-area').scrollTop = document.getElementById('console-area').scrollHeight;
  };

  const clearLog = () => {
    var li = document.getElementById('console-messages');
    li.innerHTML = '';
  };

  return (
    <React.Fragment>
      <Head>
        <title>file</title>
      </Head>
      <div>
        <p>
          ⚡ fs.read() / fs.write() ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
      </div>
      <div>
        <div id="div1">
          <h3>ファイル読み込み</h3>
          <button onClick={onOpen}>ファイルを開く</button>
          <p>テキストエリア：</p>
          <textarea id="edit-area"></textarea>
        </div>
        <div id="div2">
          <h3>ファイル書込み</h3>
          <button onClick={onSelectSaveFolder}>保存先フォルダ選択</button>
          <p>保存先フォルダ:</p>
          <p>{selectfolder}</p>
          <p>保存ファイル名:</p>
          <input id="savefilename" type="text"></input>
          <p>
            <button onClick={onSaveButton}>ファイルに保存する。</button>
          </p>
        </div>
      </div>
      <div id="divconsole">
        <p>ログ出力</p>
        <div id="console-area">
          <ul id="console-messages"></ul>
        </div>
        <button onClick={clearLog}>ログ消去</button>
      </div>
      <style jsx>
        {`
          #div1 {
            float: left;
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
          #div2 {
            float: left;
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
          #divconsole {
            clear: both;
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
          #console-area {
            width: 640px;
            height: 200px;
            background-color: silver;
            overflow: scroll;
            margin: 10px;
            padding: 10px;
          }
          ul {
            list-style: none;
            font-size: small;
            margin: 2px;
            padding: 2px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;
