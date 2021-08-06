import {createStore , combineReducers,applyMiddleware} from "redux"
import { CartReducer,AuthReducer,OrderReducer,AddcakeReducer } from "./reducers"
import createSaga from "redux-saga"
import thunk from "redux-thunk"
import RootSaga from "./sagas"

var sagaMiddleware = createSaga()

var reducers = combineReducers({CartReducer , AuthReducer,OrderReducer,AddcakeReducer})

var store = createStore(reducers, applyMiddleware(sagaMiddleware,thunk))

sagaMiddleware.run(RootSaga)

export default store 

