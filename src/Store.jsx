import { applyMiddleware, createStore } from "redux";

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducers from "./reducers/reducers"

//const middleware = applyMiddleware(promise(), thunk, logger())

let store = createStore(reducers)

export default store
