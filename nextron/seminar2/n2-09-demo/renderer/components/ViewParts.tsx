import React, { useContext, useEffect } from 'react';
import { DropFilePathContext, EditContext } from '../pages/home';
import fs from 'fs';

const ViewParts = () => {
  const [dropfilepath, _] = useContext(DropFilePathContext);
  const setEditData = useContext(EditContext);

  useEffect(() => {
    console.log('useEffect() - ViewParts - dropfilepath=' + dropfilepath);
    if (dropfilepath === undefined) return;

    // ドロップされたファイル名表示
    const element = document.getElementById('filepath') as HTMLInputElement;
    element.value = dropfilepath;

    // ファイルを読み込む
    fs.readFile(dropfilepath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log('fs.readFile ERR!: ' + err);
      } else {
        // プレビューエリアにファイルの中身を表示
        const area = document.getElementById('preview');
        area.textContent = data;

        // エディットパーツにファイルの中身を反映
        setEditData(data);
      }
    });
  }, [dropfilepath]);

  return (
    <React.Fragment>
      <div id="view-parts">
        <h3>ファイル・プレビュー</h3>
        <p>ファイル名：</p>
        <input id="filepath" size={50} disabled={true}></input>
        <p>ファイルの中身：</p>
        <p>
          <textarea id="preview" cols={40} rows={8} disabled={true}></textarea>
        </p>
      </div>
      <style jsx>
        {`
          #view-parts {
            border: 1px solid #000000;
            margin: 10px;
            padding: 10px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default ViewParts;
