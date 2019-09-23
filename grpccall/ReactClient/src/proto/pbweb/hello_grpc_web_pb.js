/**
 * @fileoverview gRPC-Web generated client stub for hello
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.hello = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.hello.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.hello.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.hello.HelloRequest,
 *   !proto.hello.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/hello.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.hello.HelloRequest,
  proto.hello.HelloReply,
  /** @param {!proto.hello.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.hello.HelloRequest,
 *   !proto.hello.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.hello.HelloReply,
  /** @param {!proto.hello.HelloRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.hello.HelloReply.deserializeBinary
);


/**
 * @param {!proto.hello.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.hello.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.hello.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.hello.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/hello.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.hello.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.hello.HelloReply>}
 *     A native promise that resolves to the response
 */
proto.hello.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/hello.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


module.exports = proto.hello;

