import MyApi from '../apis/MyApi'

class MyService {

  static callAsyncTest = async (param) => {
    console.log("MyService:callAsyncTest1:")
    return await MyApi.callApiTest(param)
      .then((response) => {
        return ({result: "callAsyncTest2-then"})
      })
      .catch((error) => {
        return ({error: "callAsyncTest2-catch"})
      })
  }

  static callPing = async (param) => {
    console.log("MyService:callPing:")
    return await MyApi.callHelloWorld(param)
      .then((response) => {
        console.log("MyService:callPing:then")
        return ({result: "callAsyncTest2-then"})
      })
      .catch((error) => {
        console.log("MyService:callPing:catch")
        return ({error: "callAsyncTest2-catch"})
      })
  }

  static callSay = async () => {
    console.log("MyService:callSay()")

    return await MyApi.startPing()
    .then(recponse => {
      console.log("MyService:OK!")
      return
    })
    .catch(error => {
      console.log("MyService:ERR!", error)
      return
    })
  }
}

export default MyService
