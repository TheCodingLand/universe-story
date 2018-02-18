import { applyMiddleware, createStore, subscribe } from "redux";

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducers from "./reducers/reducers"
import { loadState, saveState } from './reducers/localStorage'

const persistedState = loadState();


//const middleware = applyMiddleware(promise(), thunk, logger())

let store = createStore(reducers, persistedState)

store.subscribe(() => {
    saveState(store.getState())
});


export default store
