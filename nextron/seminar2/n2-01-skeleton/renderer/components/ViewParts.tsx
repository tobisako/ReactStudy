import React from 'react';

const ViewParts = () => (
  <React.Fragment>
    <div id="view-parts">
      <h3>ファイル・プレビュー</h3>
      <p>ファイル名：</p>
      <input id="filepath" disabled={true}></input>
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

export default ViewParts;
