/**
 * @fileoverview gRPC-Web generated client stub for pinger
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pinger = require('./pinger_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pinger.PingerClient =
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
proto.pinger.PingerPromiseClient =
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
 *   !proto.pinger.Empty,
 *   !proto.pinger.Pong>}
 */
const methodDescriptor_Pinger_Ping = new grpc.web.MethodDescriptor(
  '/pinger.Pinger/Ping',
  grpc.web.MethodType.UNARY,
  proto.pinger.Empty,
  proto.pinger.Pong,
  /** @param {!proto.pinger.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pinger.Pong.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pinger.Empty,
 *   !proto.pinger.Pong>}
 */
const methodInfo_Pinger_Ping = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pinger.Pong,
  /** @param {!proto.pinger.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.pinger.Pong.deserializeBinary
);


/**
 * @param {!proto.pinger.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pinger.Pong)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pinger.Pong>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pinger.PingerClient.prototype.ping =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pinger.Pinger/Ping',
      request,
      metadata || {},
      methodDescriptor_Pinger_Ping,
      callback);
};


/**
 * @param {!proto.pinger.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pinger.Pong>}
 *     A native promise that resolves to the response
 */
proto.pinger.PingerPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pinger.Pinger/Ping',
      request,
      metadata || {},
      methodDescriptor_Pinger_Ping);
};


module.exports = proto.pinger;

