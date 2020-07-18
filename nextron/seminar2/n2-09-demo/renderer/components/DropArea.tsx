import React, { useState, useEffect, useContext } from 'react';
import { DropFilePathContext } from '../pages/home';

type DropsType = {
  border?: string;
};

const DropArea = () => {
  const [dropfilepath, setDropFilePath] = useContext(DropFilePathContext);
  const [dropareastyle, setDropareastyle] = useState<DropsType>();

  useEffect(() => {
    const element_drop = document.getElementById('drop-box');

    element_drop.ondragenter = (event: DragEvent) => {
      console.log('ondragenter');
      event.preventDefault();
      setDropareastyle({ border: '10px dashed #7aaa' });
    };

    element_drop.ondragover = (event: DragEvent) => {
      console.log('ondragover');
      event.preventDefault();
    };

    element_drop.ondragleave = (event: DragEvent) => {
      console.log('ondragleave');
      event.preventDefault();
      setDropareastyle({ border: '10px dashed #aaa' });
    };

    element_drop.ondrop = (event: DragEvent) => {
      console.log('ondrop');
      event.preventDefault();
      event.stopPropagation();
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        const f = event.dataTransfer.files[i];
        console.log('f=' + f.path);
        setDropFilePath(f.path);
        break; // テスト：１つだけ取得してbreakする
      }
    };

    setDropareastyle({ border: '10px dashed #aaa' });
  }, []);

  return (
    <React.Fragment>
      <div id="drop-box" style={dropareastyle}>
        テキストファイルをドラッグドロップしてね ！
      </div>
      <style jsx>
        {`
          #drop-box {
            width: 380px;
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

export default DropArea;
