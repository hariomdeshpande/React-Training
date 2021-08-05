// reducers are nothing but just pure functions who are responsible for updating the store

export var AuthReducer = function (
  state = {
    isuserloggedin: localStorage.token ? true : false,
  },
  action
) {
  switch (action.type) {
    case "LOGIN_FETCH": {
      state = { ...state }
      state["isloading"] = true
      return state
    }
    case "LOGIN_SUCCESS": {
      state = { ...state }
      state["isuserloggedin"] = true
      state["user"] = action.payload
      state["isloading"] = false
      return state
    }
    case "LOGIN_FAILURE": {
      state = { ...state }
      state["isloading"] = false
      state["error"] = "Invalid Credentials"
      return state
    }
    default: return state
  }
}

export var CartReducer = function (
  state = {
    cartitems: {},
    carttotal:0
  },
  action
) {
  // state means here state of store i.e that object whihc contains data
  // action means what it has to do

  switch (action.type) {
    case "CART_FETCHING": {
      state = { ...state }
      state["isloading"] = true
      return state
    }
    case "CART_SUCCESS": {
      state = { ...state }
      state["isloading"] = false
      state["cartitems"] = action.payload

      return state
    }
    case "CART_FAILURE": {
      state = { ...state }
      state["isloading"] = false
      state["carterror"] = "Some Error Occurred"
      return state
    }
    case "ADD_TO_CART_SUCCESS": {
      state = {...state }
      state["isloading"] = false
      state["addcartresponse"] = "Cake Added To Cart !!"
  
      return state
    }
    case "ADD_TO_CART_FAILURE": {
      state = { ...state }
      state["isloading"] = false
      state["addcarterror"] = "Some Error Occurred Adding Item"
      return state
    }
    case "REMOVE_FROM_CART_SUCCESS": {
      state = {...state }
      state["isloading"] = false
      state["removecartresponse"] = action.payload
  
      return state
    }
    case "REMOVE_FROM_CART_FAILURE": {
      state = { ...state }
      state["isloading"] = false
      state["removecarterror"] = "Some Error Occurred Removing Item"
      return state
    }
    default: return state
  }
};

export var OrderReducer = function (
  state = {
    isloading:false,
    orderfetchresponse:{}
  },
  action
) {
  switch (action.type) {

    case "ORDER_PLACE_SUCCESS": {
      state = {...state }
      state["isloading"] = false
      state["orderplaceresponse"] = action.payload
  
      return state
    }
    case "ORDER_PLACE_FAILURE": {
      state = { ...state }
      state["isloading"] = false
      state["orderplaceerror"] = "Some Error Occurred Placing Order"
      return state
    }
    case "ORDER_FETCHING": {
      state = {...state }
      state["isloading"] = true
      return state
    }
    case "ORDER_FETCH_SUCCESS": {
      state = {...state }
      state["isloading"] = false
      state["orderfetchresponse"] = action.payload
  
      return state
    }
    case "ORDER_FETCH_FAILURE": {
      state = { ...state }
      state["isloading"] = false
      state["orderfetcherror"] = "Some Error Occurred Placing Order"
      return state
    }
    default: return state
  }
};

