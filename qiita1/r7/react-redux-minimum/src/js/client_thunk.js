
//////////////////////////////////
// 非同期アプリケーション redux-thunk redux-promise-middleware
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
//import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

//const reducer = (state={}, action) => {
const reducer = (state=initialState, action) => {
    switch (action.type) {
    //case "FETCH_USERS_START":
    case "FETCH_USERS_PENDING":
      return {...state, fetching: true};
    //case "FETCH_USERS_ERROR":
    case "FETCH_USERS_REJECTED":
      return {...state, fetching :false, error: action.payload};
    //case "RECEIVE_USERS":
    case "FETCH_USERS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
  }
  return state;
};

//const middleware = applyMiddleware();
//const middleware = applyMiddleware(createLogger());
//const middleware = applyMiddleware(thunk, createLogger());
const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(reducer, middleware);

//store.dispatch({type: "FOO"});
// store.dispatch((dispatch) => {
//   // dispatch({type: "FOO"});
//   // // do something async
//   // dispatch({type: "BAR"});
//   dispatch({type: "FETCH_USERS_START"});
//   axios.get("http://localhost:18080").then((response) => {
//     dispatch({type: "RECEIVE_USERS", payload: response.data});
//   }).catch((err) => {
//     dispatch({type: "FETCH_USERS_ERROR", payload: err});
//   });
// });

store.dispatch({
  type: "FETCH_USERS",
  payload: axios.get("http://localhost:18080")
});



///////////////////////////////////////////////////////////
// またかーい。middleware
// import { applyMiddleware, createStore } from "redux";

// const reducer = (state = 0, action) => {
//   switch(action.type) {
//     case "INC":
//       state = state + 1;
//       break;
//     case "DEC":
//       state = state - 1;
//       break;
//     case "ERR":
//       throw new Error("It's error!!!!");
//       // このように複数middleware を使うことで
//       // middleware で発生した例外をハンドリングするためのmiddleware を定義することもできるのです。
//   }
//   return state;
// }

//     // function logger(store) {
//     //   return function (next) {    /* 無名関数 */
//     //     return function (action) {    /* 無名関数 */
//     //       console.log("action fired", action);
//     //     }
//     //   }
//     // }

// //const middleware = applyMiddleware();
// const logger = (store) => (next) => (action) => {
//   console.log("action fired", action);
  
//   // action.type = "DEC";
//     // このようにmiddleware がある場合はmiddleware の最後の方にnext(action); をつけるように意識する一方で、
//     // middleware 内で実施した変更がreducer に対して副作用を持たせないよう注意してください。

//   next(action);
// }
// //const middleware = applyMiddleware(logger);
// const error = (store) => (next) => (action) => {
//   try{
//     next(action);
//   } catch (e) {
//     console.log("Error was occured", e);
//   }
// }

// const middleware = applyMiddleware(logger, error);

// //const store = createStore(reducer, 1);
// const store = createStore(reducer, 1, middleware);

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

// store.dispatch({type: "INC"});
// store.dispatch({type: "INC"});
// store.dispatch({type: "DEC"});
// store.dispatch({type: "DEC"});
// store.dispatch({type: "ERR"});



/////////////////////////////////////////////////////
// チャット・
// //import { createStore } from "redux";
// import { applyMiddleware, createStore } from "redux";

// //const userReducer = (state, action) => {}
// const userReducer = (state = {}, action) => {
//   switch(action.type) {
//     case "CHANGE_NAME":
//       //state.name = action.payload;
//       state = {...state, name: action.payload}
//       break;
//     case "CHANGE_AGE":
//       //state.age = action.payload;
//       state = {...state, age: action.payload}
//       break;
//   }
//   return state;
// }

// //const tweetsReducer = (state, action) => {}
// const tweetsReducer = (state = [], action) => {
//   switch(action.type) {
//     case "ADD_TWEET":
//       state = state.concat({id: Date.now(), text: action.payload});
//   }
//   return state;
// }

// const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// });

// //const store = createStore(reducers, { user: { name: "Tsutomu", age: 35 }, twiits: [] });
// const store = createStore(reducers);

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

// //store.dispatch({type: "FOO", payload: "BAR"});
// store.dispatch({type: "CHANGE_NAME", payload: "Tsutomu"});
// store.dispatch({type: "CHANGE_AGE", payload: 35});
// store.dispatch({type: "CHANGE_AGE", payload: 36});
// store.dispatch({type: "ADD_TWEET", payload: "OMG LIKE LOL"});
// store.dispatch({type: "ADD_TWEET", payload: "I am so like seriously like totally like right now"});


//////////////////////////////////////////////////////////////
// import { createStore } from "redux";

// //const reducer = () => {
// const reducer = (state = 0, action) => {
//   //console.log("reducer has been called.");
//   switch(action.type) {
//     case "INC":
//       return state + action.payload;
//     case "DEC":
//       return state - action.payload;
//   }
//   return state;
// }

// const store = createStore(reducer, 1);

// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });
  
// //store.dispatch({type: "INC"});
// store.dispatch({type: "INC", payload: 1});
// store.dispatch({type: "INC", payload: 2});
// store.dispatch({type: "INC", payload: 22});
// store.dispatch({type: "INC", payload: 222});
// store.dispatch({type: "DEC", payload: 1000});
