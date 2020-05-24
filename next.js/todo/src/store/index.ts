import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { initialState, reducer } from "./reducer";

export type StoreState = ReturnType<typeof initialState>;
export type ReduxStore = Store<StoreState>;

/**
 * initStore
 * Initialise and export redux store
 */
export const initStore = (state = initialState()) => {
  // RootStore
  return createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
