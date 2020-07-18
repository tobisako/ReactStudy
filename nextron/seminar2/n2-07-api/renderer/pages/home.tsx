import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import electron from 'electron';

const Home = () => {
  const [say, setSay] = useState<string>();
  const [zip, setZip] = useState({ ziphigh: '154', ziplow: '0024' });
  const [zipresult, setZipResult] = useState<string>();
  const [balance, setBalance] = useState<string>();

  // 更新された２つのinput値を1つのstateにまとめて保存
  const onChangeZipCode = (e) => {
    console.log(`onChangeZipCode() id=${e.target.id}, value=${e.target.value}`);
    setZip({ ...zip, [e.target.id]: e.target.value });
  };

  // isProd
  const isProd = async () => {
    var res;
    if (electron && electron.ipcRenderer) {
      res = await electron.ipcRenderer.invoke('is-prod', null);
      console.log('invoke-kekka: ' + res);
    }
    return res;
  };

  // hello via next.js api => Prodでは動作せず。調整が必要。
  const onHelloViaNextjsAPI = async () => {
    const baseurl = (await isProd()) ? 'app://./' : 'http://localhost:8888';
    const url = `${baseurl}/api/hello`;
    console.log('onHello():url=' + url);
    try {
      const response = await fetch(url);
      const res = await response.json();
      console.log('EXEC-OK! :' + JSON.stringify(res));
      setSay(res.data);
    } catch (err) {
      console.log('onHello() ERR! :' + err);
      setSay('fetch error!');
    }
  };

  // zipcode via next.js api => Prodでは動作せず。調整が必要。
  const onZipViaNextjsAPI = async () => {
    // URL組み立て
    const url = `http://localhost:8888/api/zipcode?ziphigh=${zip.ziphigh}&ziplow=${zip.ziplow}`;
    console.log('url=' + url);
    try {
      const res = await (await fetch(url, {})).json();
      console.log('EXEC-OK! :' + JSON.stringify(res));
      setZipResult(`${res.stateName}${res.city}${res.street}`);
    } catch (err) {
      console.log('onZip() ERR! :' + err);
      setZipResult('fetch error!');
    }
  };

  // zip via main process
  const onZipViaMain = async () => {
    var res;
    if (electron && electron.ipcRenderer) {
      res = await electron.ipcRenderer.invoke('call-zip', { ziphigh: zip.ziphigh, ziplow: zip.ziplow });
      console.log('kekka: ' + JSON.stringify(res));
      setZipResult(`${res.stateName}${res.city}${res.street}`);
    }
  };

  // zip direct -> NG
  const onZipDirect = async () => {
    const url = 'http://api.thni.net/jzip/X0401/JSON/064/0941.js';
    try {
      const res = await (await fetch(url)).json();
      console.log('EXEC-OK! :' + JSON.stringify(res));
      setZipResult(`${res.stateName}${res.city}${res.street}`);
    } catch (err) {
      console.log('onZip() ERR! :' + err);
      setZipResult('fetch error!');
    }
  };

  // stellar-sdk via main process
  const onStellarViaMain = async () => {
    var res;
    if (electron && electron.ipcRenderer) {
      res = await electron.ipcRenderer.invoke('call-stellar', 0);
      console.log('stellar-kekka: ' + JSON.stringify(res));
      setBalance(res);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>api</title>
      </Head>
      <div>
        <p>
          ⚡ api ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
      </div>
      <h2>注意：dev と package では挙動が違う（packageでapi呼出を動作させるには更なる調整が必要）</h2>
      <div id="div-area">
        <h4>/pages/api/hello.ts</h4>
        <button onClick={onHelloViaNextjsAPI}>onHelloViaNextjsAPI</button>
        <p>say {say}</p>
      </div>
      <div id="div-area">
        <h4>/pages/api/zipcode.ts</h4>
        <p>郵便番号を入力</p>
        <input id="ziphigh" size={5} onChange={(e) => onChangeZipCode(e)} value={zip.ziphigh} /> -{' '}
        <input id="ziplow" size={7} onChange={(e) => onChangeZipCode(e)} value={zip.ziplow} /> :{' '}
        <button onClick={onZipViaNextjsAPI}>onZipViaNextjsAPI</button>
        <button onClick={onZipViaMain}>onZipViaMain</button>
        <p>結果</p>
        <p>{zipresult}</p>
      </div>
      <div id="div-area">
        <h4>stellar-sdk api</h4>
        <button onClick={onStellarViaMain}>onStellarViaMain</button>
        <p>結果</p>
        <p>{balance}</p>
      </div>
      <div id="div-area">
        <h4>Public API Direct Access (error)</h4>
        <button onClick={onZipDirect}>onZipDirect</button>
        <p id="small-font">
          Access to fetch at 'http://api.thni.net/jzip/X0401/JSON/064/0941.js' from origin 'http://localhost:8888' has
          been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If
          an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS
          disabled.
        </p>
      </div>
      <style jsx>
        {`
          #div-area {
            float: left;
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
          #pos-right {
            float: left;
          }
          #small-font {
            font-size: small;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;
