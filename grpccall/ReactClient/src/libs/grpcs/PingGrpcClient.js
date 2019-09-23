//import pinger_grpc_pb from '../../proto/pb/pinger_grpc_pb'

let grpc

class PingGrpcClient {

  static init(_grpc) {
    grpc = _grpc
  }

  static callPing(resolve, reject) {
    console.log('PingGrpcClient-callPing:')
    const {Empty, Pong} = require('../../proto/pbweb/pinger_pb')
    const {PingerClient, PingerPromiseClient} = require('../../proto/pbweb/pinger_grpc_web_pb')
    //console.log('PingGrpcClient-callPing:2')
    var client = new PingerClient('http://localhost:5300',null, null);
    //console.log('PingGrpcClient-callPing:3')
    var request = new Empty();
    request = {}

    console.log('PingGrpcClient-callPing:client.ping')
    return client.ping(request, {}, (err, response) => {
      console.log('PingGrpcClient-callPing:[client.ping]', err, response)
      if (err) {
        console.log('Error: ', err);
        return reject({error: "NG-reject"});
      } else {
        console.log(response.toObject());
        return resolve({result: response.toObject()})
      }
    });

    //const protoLoader = require('@grpc/proto-loader')
    // console.log('PingGrpcClient-callPing:protoLoader')
    // const PROTO_PATH = __dirname + '../../proto/pinger.proto'
    // console.log('PingGrpcClient-callPing:PROTO_PATH', PROTO_PATH)

    // //const pinger_grpc_pb = require('../../proto/pb/pinger_grpc_pb')
    // console.log('PingGrpcClient-callPing:pinger_pb')
    // //const pinger_pb = require('../../proto/pb/pinger_pb')
    // console.log('PingGrpcClient-callPing:client')
    // const client = new pinger_grpc_pb.PingerClient(
    //   '127.0.0.1:5300',
    //   grpc.credentials.createInsecure(),
    // );
    // const req = new pinger_pb.Empty();
    // console.log('PingGrpcClient-callPing:ping')

    // return client.ping(req, function(error, result) {
    //   console.log('[client.ping]')
    //   if (error) {
    //     console.log('Error: ', error);
    //     return reject({error: "NG-reject"});
    //   } else {
    //     console.log(result.toObject());
    //     return resolve({result: result.toObject()})
    //   }
    // });

  }
}

export default PingGrpcClient
