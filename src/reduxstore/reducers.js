// reducers are nothing but just pure functions who are responsible for updating the store

export var AuthReducer = function (
  state = {
    isuserloggedin: localStorage.token ? true : false,
  },
  action
) {
  switch (action.type) {
    case "LOGIN_FETCH":{
      state= {...state}
      state["isloading"] = true
      return state
  }
  case "LOGIN_SUCCESS" :{
      state = {...state}
      state["isuserloggedin"] = true
      state["user"] = action.payload
      state["isloading"] = false
      return state
  }
  case "LOGIN_FAILURE":{
   state= {...state}
   state["isloading"] = false
   state["error"]="Invalid Credentials"
   console.log(state)
   return state
}
  default : return state
}
}

export var Hariom = function (
  state = {
    registered: 0,
    verified: 0,
  },
  action
) {
  // state means here state of store i.e that object whihc contains data
  // action means what it has to do

  switch(action.type){
    case "CART_FETCHING" :{
        state = {...state}
        state["isloading"] = true
        return state
    }
    case "CART_SUCCESS" :{
     state = {...state}
     state["isloading"] = false
     state["cartitems"] = action.payload
     return state
 }
 case "CART_FAILURE" :{
     state = {...state}
     state["isloading"] = false
     state["carterror"] = "Some Error Occurred"
     return state
 }

    default : return state
}
};

// export var Vaishali  = function(state =  {
//     attendees :0
// } , action){
//      switch(action.type){
//         case "REGISTER" :{
//             state= {...state}
//             state["attendees"]+=1
//             return state
//         }
//         case "DEREGISTER" :{
//             state= {...state}
//             state["attendees"]-=1
//             return state
//         }
//         default : return state
//      }
// }
