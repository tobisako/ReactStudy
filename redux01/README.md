# redux 
参考：たぶんこれが一番分かりやすいと思います React + Redux のフロー図解
https://qiita.com/mpyw/items/a816c6380219b1d5a3bf
https://github.com/redux-saga/redux-saga

ReactReduxによって提供されるconnectという関数

Action
{
    type: "アクションの種類を一意に識別できる文字列またはシンボル",
    payload: "アクションの実行に必要な任意のデータ",
}

Reduce
畳み込み演算
以前の状態とアクションを組み合わせて，新しい状態を生み出す

・初期状態はReducerのデフォルト引数で定義される
・状態を変更する際，渡されてきたstateそのものを書き換えずに，新しいものを合成するように書く

Reducer分割に使われたキーがそのままState分割にも流用

State: そのコンポーネントが持っている状態
Props: 親コンポーネントから渡されたプロパティ

  State (状態)
  mutable data (可変のデータ)
  maintained by component (コンポーネントによって保持)
  can change it (変更可)
  should be considered private (プライベートであるべき)

Props (プロパティ)
Props は、一般的に、親コンポーネントから子コンポーネントに渡される値です。
  immutable data (不変のデータ)
  passed in from parent (親から渡される)
  can't change it (変更不可)
  can be defaulted & validated (デフォルト値の設定と検証が可能)

getDefaultProps で定義されたデフォルト値か、
  親コンポーネントから渡された値のどちらかを持つことになります。

Saga
  yield take(ACTION_TYPE) で指定したアクションの発生を監視する
  取ってきたアクションで煮るなり焼くなりする
  yield put(action) で結果をまた別のアクションとして排出する
