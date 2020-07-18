import React from 'react';
import EditParts from './EditParts';

const OutputFrame = () => {
  const onSave = () => {};

  return (
    <React.Fragment>
      <div id="output-frame">
        <h3>エディット・ビュー</h3>
        <EditParts />
        <p>新しいファイル名：</p>
        <p>
          <input size={42} />
        </p>
        <button onClick={onSave}>保存する</button>
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
