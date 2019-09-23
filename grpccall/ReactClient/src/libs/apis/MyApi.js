//import React, {  useContext } from 'react';
import { delay } from "redux-saga/effects"
import PingGrpcClient from "../grpcs/PingGrpcClient"

class MyApi {

  static callHelloWorld = async (param) => {
    console.log("MyApi-callHelloWorld:", param)
    return new Promise((resolve, reject) => {
      console.log("MyApi-callHelloWorld:Promise", param)
      const {HelloRequest, RepeatHelloRequest,HelloReply} = require('../../proto/pbweb/helloworld_pb.js');
      const {GreeterClient} = require('../../proto/pbweb/helloworld_grpc_web_pb.js');
      var client = new GreeterClient('http://127.0.0.1:9090',null,null)
      var request = new HelloRequest();
      request.setName('World');
      client.sayHello(request, {}, (err, response) => {
        //console.log(response.getMessage());
        console.log("CB", err, response);
      });
    })
  }

  static callHello = async (param) => {
    console.log("MyApi-callHello:", param)
    return new Promise((resolve, reject) => {
      console.log("MyApi-callHello:Promise", param)
      const {HelloRequest} = require('../../proto/pbweb/hello_pb')
      const {GreeterClient} = require('../../proto/pbweb/hello_grpc_web_pb')
      var client = new GreeterClient('https://127.0.0.1:50051',null, null);
      var request = new HelloRequest({id:2, name:"HANAKO"});

      client.sayHello(request, {}, (err, response) => {
      //client.sayHello({id:2, name:"HANAKO"}, {}, (err, response) => {
        console.log('[client.sayHello]')
        if (err) {
          console.log('->Error: ', err);
          //return resolve({result: "hoge"})
          return reject({error: "NG-reject"});
        } else {
          console.log('->Error: ', response);
          console.log(response.toObject());
          return resolve({result: response.toObject()})
        }
      })
    })
  }

  static callPing = async (param) => {
    console.log("MyApi-callPing:", param)

    //PingGrpcClient.callPing(resolve, reject)
    return new Promise((resolve, reject) => {
      console.log("MyApi-callPing:Promise", param)
      const {Empty, Pong} = require('../../proto/pbweb/pinger_pb')
      const {PingerClient, PingerPromiseClient} = require('../../proto/pbweb/pinger_grpc_web_pb')
      //console.log('PingGrpcClient-callPing:2')

      var client = new PingerClient('http://127.0.0.1:5300',null, null);
      //console.log('PingGrpcClient-callPing:3')
      var request = new Empty();
      //request = {}

      console.log('PingGrpcClient-callPing:client.ping')

      client.ping(request, {}, (err, response) => {

        console.log('PingGrpcClient-callPing:[client.ping]', err, response)

        if (err) {
          console.log('->Error: ', err);
          //return resolve({result: "hoge"})
          return reject({error: "NG-reject"});
        } else {
          console.log('->Error: ', response);
          console.log(response.toObject());
          return resolve({result: response.toObject()})
        }
      })
    })

    // return new Promise((resolve, reject) => {
    // })
  }

  static callApiTest = async (param) => {
    console.log("MyApi-callApiTest:")
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("MyApi-callApiTest:setTimeout: param = ", param)
        if(param === 123) {
          console.log("MyApi-callApiTest:resolve")
          return resolve({result: "OK-resolve"})
        } else {
          console.log("MyApi-callApiTest:reject")
          return reject({error: "NG-reject"});
        }
      }, 800)
    })
  }

  static dummyCall = () => {
    console.log("MyApi:dummyCall:")
    delay(1000)
    console.log("MyApi:dummyCall:end")
    return
  }
}

export default MyApi
