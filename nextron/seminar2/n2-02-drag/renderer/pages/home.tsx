import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import electron from "electron";

const Home = () => {
  const [dragpath, setDragPath] = useState<string>(null);

  useEffect(() => {
    const element_droppath = document.getElementById(
      "drop-path"
    ) as HTMLInputElement;
    element_droppath.value = dragpath;
  }, [dragpath]);

  useEffect(() => {
    const element_drop = document.getElementById("drop-box");

    element_drop.ondragenter = (event: DragEvent) => {
      console.log("ondragenter");
      event.preventDefault();
    };

    element_drop.ondragover = (event: DragEvent) => {
      console.log("ondragover");
      event.preventDefault();
    };

    element_drop.ondragleave = (event: DragEvent) => {
      console.log("ondragleave");
      event.preventDefault();
    };

    element_drop.ondrop = (event: DragEvent) => {
      console.log("ondrop");
      event.preventDefault();
      event.stopPropagation();
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const f = event.dataTransfer.files[i];
        console.log("f=" + f.path);
        setDragPath(f.path);
        break; // テスト：１つだけ取得してbreakする
      }
    };

    const element_drag = document.getElementById("drag-item");
    element_drag.ondragstart = async (event: DragEvent) => {
      console.log("ondragstart - " + dragpath);
      event.preventDefault();

      // パス取得
      const element_droppath = document.getElementById(
        "drop-path"
      ) as HTMLInputElement;
      console.log("val=:" + element_droppath.value);

      // event.sender.startDrag
      if (electron && electron.ipcRenderer) {
        const ret = await electron.ipcRenderer.invoke(
          "ondragstart",
          element_droppath.value
        );
        console.log("icon-path=" + ret);
      }
    };

    return () => {
      // componentWillUnmount()
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Drag & Drop</title>
      </Head>
      <div>
        <p>
          ⚡ Drag & Drop ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
      </div>
      <h2>注意：先にbuildしてから npm run dev する事（dragのみの制限）</h2>
      <div id="frame-a-left">
        <h3>Drop Area</h3>
        <div id="drop-box">ドロップしてね！</div>
      </div>
      <div id="frame-b-right">
        <h3>Drag Area</h3>
        <img
          src={dragpath === null ? "" : "/images/fileicon.png"}
          id="drag-item"
        />
        <React.Fragment>
          <p>ファイル名：</p>
          <input type="text" id="drop-path" size={50} disabled={true} />
        </React.Fragment>
      </div>
      <style jsx>
        {`
          #frame-a-left {
            float: left;
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
          #frame-b-right {
            float: left;
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
          #drop-box {
            width: 240px;
            height: 120px;
            color: #777;
            border: 10px dashed #aaa;
            border-radius: 10px;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;
