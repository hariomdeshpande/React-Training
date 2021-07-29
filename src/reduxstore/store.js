import {createStore , combineReducers} from "redux"
import { Hariom,AuthReducer } from "./reducers"

var reducers = combineReducers({Hariom , AuthReducer})

var store = createStore(reducers)

export default store 



var storedata =  store.getState()

// console.log("state of store is" , storedata)

// store.dispatch({
//     type:"DELL_LAPTOP1"
// })

// store.dispatch({
//     type:"DELL_LAPTOP2"
// })