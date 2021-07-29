// reducers are nothing but just pure functions who are responsible for updating the store

export var AuthReducer = function (
  state = {
    isuserloggedin: localStorage.token ? true : false,
  },
  action
) {
  switch (action.type) {
    case "LOGIN": {
      state = { ...state };
      state["isuserloggedin"] = true;
      state["user"] = action.payload;
      console.log(">>>>>>>>>>>>>>>>>>>>", action.user);
      return state;
    }
    default:
      return state;
  }
};

export var Hariom = function (
  state = {
    registered: 0,
    verified: 0,
  },
  action
) {
  // state means here state of store i.e that object whihc contains data
  // action means what it has to do

  switch (action.type) {
    case "SOMEACTION": {
      state = { ...state };
      // do something to state
      return state;
    }
    case "REGISTERED": {
      state = { ...state };
      state["registered"] += 1;
      return state;
    }
    case "VERIFIED": {
      state = { ...state };
      state["verified"] += 1;
      return state;
    }

    default:
      return state;
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
