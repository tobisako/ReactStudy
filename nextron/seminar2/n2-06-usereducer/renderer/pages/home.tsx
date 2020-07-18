import React, { useEffect, useState, useReducer } from 'react';
import Head from 'next/head';
import Link from 'next/link';

enum ActionType {
  ACTION_ADD = 'ACTION_ADD',
  ACTION_REPLACE = 'ACTION_REPLACE',
  ACTION_INSERT = 'ACTION_INSERT',
  ACTION_SORT = 'ACTION_SORT',
  ACTION_RESET = 'ACTION_RESET',
}

// リデューサー・テスト
const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_ADD':
      return [...state, { name: action.name, age: action.age, rep: 0 }];

    case ActionType.ACTION_INSERT:
      return [
        ...state.slice(0, action.idx),
        { name: action.name, age: action.age, rep: 0 },
        ...state.slice(action.idx),
      ];

    case ActionType.ACTION_REPLACE:
      return [
        ...state.slice(0, action.idx),
        { name: action.name, age: action.age, rep: state[action.idx].rep + 1 },
        ...state.slice(action.idx + 1),
      ];

    case ActionType.ACTION_SORT:
      state.sort((a, b) => {
        if (Number(a.age) < Number(b.age)) return -1;
        if (Number(a.age) > Number(b.age)) return 1;
        return 0;
      });
      //return state; ←これでは値更新されるが再描画されない
      return [...state.slice(0, state.length)];

    case ActionType.ACTION_RESET:
      return [];

    default:
      console.log('reducer:default');
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const Home = () => {
  const [items, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    // 初期設定：アイテム３つ準備する
    dispatch({ type: ActionType.ACTION_RESET });
    for (var i = 0; i < 3; i++) {
      dispatch({ type: ActionType.ACTION_ADD, id: i, name: `やまだ${i}太郎`, age: '20', rep: 0 }); // ※実はバグ
    }
  }, []);

  // 追加ボタン
  const onAdd = () => {
    const name = document.getElementById('add-name-input') as HTMLInputElement;
    const age = document.getElementById('add-age-input') as HTMLInputElement;
    dispatch({ type: ActionType.ACTION_ADD, name: name.value, age: age.value });
  };

  // 挿入ボタン
  const onInsert = () => {
    const idx = document.getElementById('insert-idx-input') as HTMLInputElement;
    const name = document.getElementById('insert-name-input') as HTMLInputElement;
    const age = document.getElementById('insert-age-input') as HTMLInputElement;
    dispatch({ type: ActionType.ACTION_INSERT, idx: Number(idx.value), name: name.value, age: age.value });
  };

  // 置換ボタン
  const onReplace = () => {
    const idx = document.getElementById('replace-idx-input') as HTMLInputElement;
    const name = document.getElementById('replace-name-input') as HTMLInputElement;
    const age = document.getElementById('replace-age-input') as HTMLInputElement;
    dispatch({ type: ActionType.ACTION_REPLACE, idx: Number(idx.value), name: name.value, age: age.value });
  };

  // クリアボタン
  const onClear = () => {
    // 追加
    const add_name = document.getElementById('add-name-input') as HTMLInputElement;
    add_name.value = '';
    const add_age = document.getElementById('add-age-input') as HTMLInputElement;
    add_age.value = '';
    // 挿入
    const ins_idx = document.getElementById('insert-idx-input') as HTMLInputElement;
    ins_idx.value = '';
    const ins_name = document.getElementById('insert-name-input') as HTMLInputElement;
    ins_name.value = '';
    const ins_age = document.getElementById('insert-age-input') as HTMLInputElement;
    ins_age.value = '';
    // 置換
    const rep_idx = document.getElementById('replace-idx-input') as HTMLInputElement;
    rep_idx.value = '';
    const rep_name = document.getElementById('replace-name-input') as HTMLInputElement;
    rep_name.value = '';
    const rep_age = document.getElementById('replace-age-input') as HTMLInputElement;
    rep_age.value = '';
  };

  // ソート
  const onSort = () => {
    dispatch({ type: ActionType.ACTION_SORT });
  };

  // 名前テーブル・リセットボタン
  const onReset = () => {
    dispatch({ type: ActionType.ACTION_RESET });
  };

  return (
    <React.Fragment>
      <Head>
        <title>reduser</title>
      </Head>
      <div>
        <p>
          ⚡ useReducer() ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
      </div>
      <div id="div-frame">
        <h4>追加</h4>
        <p>
          name: <input id="add-name-input" />
        </p>
        <p>
          age:
          <input id="add-age-input" type="number" />
        </p>
        <button onClick={onAdd}>追加</button>
      </div>
      <div id="div-frame">
        <h4>挿入</h4>
        <p>
          idx: <input id="insert-idx-input" type="number" />
        </p>
        <p>
          name: <input id="insert-name-input" />
        </p>
        <p>
          age:
          <input id="insert-age-input" type="number" />
        </p>
        <button onClick={onInsert}>挿入</button>
      </div>
      <div id="div-frame">
        <h4>置換</h4>
        <p>
          idx: <input id="replace-idx-input" type="number" />
        </p>
        <p>
          name: <input id="replace-name-input" />
        </p>
        <p>
          age:
          <input id="replace-age-input" type="number" />
        </p>
        <button onClick={onReplace}>置換</button>
      </div>
      <div id="div-frame">
        <button onClick={onClear}>入力欄クリア</button>
      </div>
      <div id="div-name">
        <h3>名簿テーブル</h3>
        <table id="name-table">
          <tbody>
            <tr>
              <th>index</th>
              <th>name</th>
              <th>age</th>
              <th>replace count</th>
            </tr>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>{idx}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.rep}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onSort}>ソート</button>
        <button onClick={onReset}>リセット</button>
      </div>
      <style jsx>
        {`
          #div-frame {
            float: left;
            border: 1px solid #000000;
            margin: 5px;
            padding: 5px;
          }
          #div-name {
            clear: both;
            border: 1px solid #000000;
            margin: 5px;
            padding: 5px;
          }
          #name-table {
            border: 1px solid #000000;
            margin: 2px;
            padding: 2px;
          }
          td {
            border: 1px solid #000000;
            padding: 8px;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;
