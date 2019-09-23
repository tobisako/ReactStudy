// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc-web');
var pinger_pb = require('./pinger_pb.js');

function serialize_pinger_Empty(arg) {
  if (!(arg instanceof pinger_pb.Empty)) {
    throw new Error('Expected argument of type pinger.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pinger_Empty(buffer_arg) {
  return pinger_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pinger_Pong(arg) {
  if (!(arg instanceof pinger_pb.Pong)) {
    throw new Error('Expected argument of type pinger.Pong');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pinger_Pong(buffer_arg) {
  return pinger_pb.Pong.deserializeBinary(new Uint8Array(buffer_arg));
}


var PingerService = exports.PingerService = {
  ping: {
    path: '/pinger.Pinger/Ping',
    requestStream: false,
    responseStream: false,
    requestType: pinger_pb.Empty,
    responseType: pinger_pb.Pong,
    requestSerialize: serialize_pinger_Empty,
    requestDeserialize: deserialize_pinger_Empty,
    responseSerialize: serialize_pinger_Pong,
    responseDeserialize: deserialize_pinger_Pong,
  },
};

exports.PingerClient = grpc.makeGenericClientConstructor(PingerService);
