import React, { useContext, useEffect } from 'react';
import { EditContext } from '../pages/home';

const EditParts = () => {
  const [editdata, setEditData] = useContext(EditContext);

  useEffect(() => {
    console.log('useEffect() - EditParts - editdata:' + editdata);
    // エディットエリアに読み込んだファイルの中身を反映させる（初回１回のみ）
    const area = document.getElementById('editview') as HTMLInputElement;
    area.value = editdata;
  }, [editdata]);

  // テキストエリア変更イベントをキャッチ
  const onChangeTextarea = () => {
    console.log('onChangeTextarea() - EditParts');
    // テキストエリアの内容を editdata に書き込む
    const area = document.getElementById('editview') as HTMLInputElement;
    setEditData(area.value);
  };

  return (
    <React.Fragment>
      <div id="view-parts">
        <h3>エディター</h3>
        <p>ファイルの中身：</p>
        <textarea id="editview" onChange={onChangeTextarea} cols={40} rows={8}></textarea>
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

export default EditParts;
