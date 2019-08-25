import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//import React, { Component } from 'react';
//export default class Layout extends Component {

export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {title: "Welcome"};
  }

  // hoge() {
  //   //this.setState({name: "PIYOKO2"}); エラーが謎。
  //   console.log("ho")
  // }

  changeTitle(title) {
    this.setState({title});
  }

  changeTitle2(title) {
    this.setState({title:"ddd"});
  }

  render() {
    // setTimeout(
    //   () => { this.setState({title: "Welcome Tobii!"}); },
    //   2000
    // );
    return (
      <div>
        <Header changeTitle={this.changeTitle2.bind(this)} title={this.state.title} />
        <Footer />
      </div>);
  }

  //      <input type="text" onInput={this.onInput} />
  //      <button onClick={this.cl()} >登録</button>
  // なぜかエラーlet components = [<Header />, <Footer />];
  //  <Header title={this.state.title} />

} 
