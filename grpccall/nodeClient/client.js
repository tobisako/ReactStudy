

const {Empty, Pong} = require('../ReactClient/src/proto/pbweb/pinger_pb')
const {PingerClient, PingerPromiseClient} = require('../ReactClient/src/proto/pbweb/pinger_grpc_web_pb')

var client = new PingerClient('http://localhost:5300',null, null);

var request = new Empty();

client.ping(request, {}, (err, response) => {
  console.log('PingGrpcClient-callPing:[client.ping]', err, response)
})
