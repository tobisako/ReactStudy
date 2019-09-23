import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import PingContainer from './component/container/PingContainer'
import PingGrpcClient from './libs/grpcs/PingGrpcClient'


console.log("0MyApi-callHelloWorld:Promise")
const {HelloRequest, RepeatHelloRequest,HelloReply} = require('./proto/pbweb/helloworld_pb.js');
const {GreeterClient} = require('./proto/pbweb/helloworld_grpc_web_pb.js');
var client = new GreeterClient('http://127.0.0.1:9090',null,null)
var request = new HelloRequest();
request.setName('World');
client.sayHello(request, {}, (err, response) => {
  //console.log(response.getMessage());
  console.log("CB", err, response);
});


class App extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={PingContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
