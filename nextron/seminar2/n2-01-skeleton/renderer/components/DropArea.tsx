import React from 'react';

const DropArea = () => {
  return (
    <React.Fragment>
      <div id="drop-box">テキストファイルをドラッグドロップしてね ！</div>
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
