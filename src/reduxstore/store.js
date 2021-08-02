import {createStore , combineReducers,applyMiddleware} from "redux"
import { Hariom,AuthReducer } from "./reducers"
import createSaga from "redux-saga"
import thunk from "redux-thunk"
import RootSaga from "./sagas"

var sagaMiddleware = createSaga()

var reducers = combineReducers({Hariom , AuthReducer})

var store = createStore(reducers, applyMiddleware(sagaMiddleware,thunk))

sagaMiddleware.run(RootSaga)
export default store 


var storedata =  store.getState()

// console.log("state of store is" , storedata)

// store.dispatch({
//     type:"DELL_LAPTOP1"
// })

// store.dispatch({
//     type:"DELL_LAPTOP2"
// })