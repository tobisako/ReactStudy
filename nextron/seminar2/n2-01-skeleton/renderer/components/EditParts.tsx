import React from 'react';

const EditParts = () => (
  <React.Fragment>
    <div id="view-parts">
      <h3>エディター</h3>
      <p>ファイルの中身：</p>
      <textarea id="editview" cols={40} rows={8}></textarea>
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

export default EditParts;
