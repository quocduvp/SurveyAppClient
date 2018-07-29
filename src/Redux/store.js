import {createStore,applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import {root} from "./rootReducer";
// const middleWare = applyMiddleware(thunk,logger,promise);
const middleWare = applyMiddleware(thunk,promise);

export const store = createStore(root,middleWare)