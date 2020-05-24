import {combineReducers} from "redux";
import * as Todos from  './todos';
import * as Auth from  './auth';


// RootState（initialState）
export function initialState() {
    // 今後、機能ごとにstateを追加していく
    return {
        todos: Todos.initialState(),
        auth: Auth.initialState()
    }
}

// RootReducer
export const reducer = combineReducers({
    // 今後、機能ごとにstateを追加していく
    todos: Todos.reducer,
    auth: Auth.reducer
});
