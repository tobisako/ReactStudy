# ReactClient

# pinger
## 内容
$ cd pinger
## gRPCサーバの実装に必要
$ go get -u google.golang.org/grpc
## Protocol Buffersの定義からGolangのソースコードを生成に必要
$ go get -u github.com/golang/protobuf/protoc-gen-go

## 起動
$ cd pinger
$ go run server.go 

protoc -I=./ pinger.proto --js_out=import_style=commonjs:./ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./

protoc --go_out=plugins=grpc:pb myapi.proto
protoc --js_out=import_style=commonjs:pb --grpc-web_out=import_style=commonjs,mode=grpcwebtext:pb myapi.proto

https://github.com/grpc/grpc-web/issues/473

protoc -I=./ myapi.proto --js_out=import_style=commonjs,binary:./ --plugin=protoc-gen-grpc-web=C:/Program Files/Protoc/protoc-3.9.1-win64/bin/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./


# 参考
コピペでできるGolangでgRPCサーバ立ててRailsからアクセスする方法
https://tech.smartcamp.co.jp/entry/2019/03/28/175137?amp=1#%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E3%82%92%E4%BD%9C%E6%88%90%E3%81%97%E3%81%BE%E3%81%97%E3%82%87%E3%81%86

gRPC Basics - Node.js
https://grpc.io/docs/tutorials/basic/node/
  @grpc/proto-loader

/* eslint-disable */

protoc -I=. helloworld.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

webの方を作る：
protoc -I=. pinger.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

protoc -I=. hello.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

・web_pb
https://qiita.com/okumurakengo/items/cc696cdf28850d54775d

現時点では、gRPC-WebにEnvoyを使用することはできません。gRPC-Webブラウザクライアントは、gRPCバックエンドと直接通信できません。
