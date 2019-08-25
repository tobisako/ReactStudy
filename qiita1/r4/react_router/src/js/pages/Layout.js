import React from "react";
//import { Link } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";

//export default class Layout extends React.Component {
class Layout extends React.Component {

  navigate() {
    console.log(this.props.history);
    this.props.history.push("/");
    //this.props.history.replace("/");
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="settings" class="btn btn-success">settings</Link>
        <button class="btn btn-info" onClick={this.navigate.bind(this)}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);


//<Link to="archives">archives</Link>,
//<Link to="settings">settings</Link>
//<Link to="settings"><button class="btn btn-success">settings</button></Link>
