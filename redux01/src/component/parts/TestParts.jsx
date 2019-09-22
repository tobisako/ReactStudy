import React from 'react'
import loading from '../../loadingicon.gif'

class TestParts extends React.Component {
  constructor(props) {
    super(props)
    this.cnt = 10;
    this.state = { value: 20 };
  }
  render() {
    console.log("render!", this.props.testState.title )
    return (
      <div>
        <p>title={this.props.testState.title}</p>
        <div>
          <p>ローカルカウンタ（使わない）</p>
          <p>cnt = {this.cnt}</p>
          <button onClick={this.onClick1.bind(this)}>カウントアップ（更新されない）</button>
        </div><hr/>
        <div>
          <p>stateカウンタ</p>
          <p>value = {this.state.value}</p>
          <button onClick={this.onClick2.bind(this)}>カウントアップ(state)</button>
        </div><hr/>
        <div>
          <p>actionによるpropカウントアップ</p>
          <p> amount = {this.props.testState.amount}</p>
          <button onClick={this.onClick3.bind(this)}>カウントアップ(props)</button>
        </div><hr/>
        <div>
          <p>actionによる表示変更</p>
          <p>{this.mess()}</p>
          <button onClick={this.onClick4.bind(this)}>シーン変更(1)</button>
          <button onClick={this.onClick5.bind(this)}>シーン変更(2)</button>
        </div><hr/>
        <div>
          <p>action/sagaによる非同期カウンタ</p>
          <p> async_amount = {this.props.testState.async_amount} </p>
          <button onClick={this.onClick6.bind(this)} disabled={this.checkButtonDisabled()} >非同期カウントアップ</button>
          <p>{this.loading()}</p>
        </div>
      </div>
    )
  }

  checkButtonDisabled() {
    return this.props.testState.async_wait ? (true) : (false)
  }

  mess() {
    console.log("mess")
    const { testState } = this.props
    if( testState.scene === 2 ) {
      return ( "名前:" + testState.name + ", 性別:" + testState.sex )
    }
    return ("")
  }

  loading() {
    if( this.props.testState.async_wait === true ) {
      return (
        <img src={loading} width="32" alt="loading" />
      )
    } else return ("")
  }

  onClick1() {
    this.cnt ++
  }

  onClick2() {
    this.setState({ value: this.state.value + 1 })
  }

  onClick3() {
    this.props.onCountUpAmount(3)
  }

  onClick4() {
    this.props.onSelectScene1()
  }

  onClick5() {
    this.props.onSelectScene2( {name: "piyo", age: 23, sex: "onna"})
  }

  onClick6() {
    this.props.onAsyncCountStart(7)
  }
}

export default TestParts
