import axios from "axios";
import {authenticator} from "../index";
import { ToastContainer ,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export function Loginthunk(data) {
  return async (dispatch) => {
    dispatch({
      type: "LOGIN_FETCH",
    });
    var result = await authenticator({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/login",
      data: data,
    });
    if (result.data.token) {
      localStorage.setItem('userToken',result.data.token)
      toast.info(`Welcome To HD Cake Gallary ${result.data.name}`);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: result.data,
      });
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
      });
    }
  };
}

export function Recoverthunk(data) {
  return async (dispatch) => {
    var result = await axios({
      method: "post",
      url: "https://apifromashu.herokuapp.com/api/recoverpassword",
      data: data,
    });
    window.alert(result.data.message)
  };
}


export function AddToCartthunk(data) {
  return async (dispatch) => {
    dispatch({
      type: "CART_FETCHING",
    });
    var result = await authenticator({
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/addcaketocart",
      data: data,
    });
    if (result) {
      toast.success(`Cake Added to cart`);
      dispatch({
        type: "ADD_TO_CART_SUCCESS",
        payload: result.data,
      });
    } else {
      dispatch({
        type: "ADD_TO_CART_FAILURE",
      });
    }
  };
}

export function Removefromcartthunk(data) {
  return async (dispatch) => {
    dispatch({
      type: "CART_FETCHING",
    });
    var result = await authenticator({
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/removeonecakefromcart",
      data: data,
    });
    if (result) {
      alert("Cake removed from cart !! ")
      dispatch({
        type: "REMOVE_FROM_CART_SUCCESS",
        payload: result.data,
      });
    } else {
      dispatch({
        type: "REMOVE_FROM_CART_FAILURE",
      });
    }
  };
}

export function FetchCartthunk() {
  return async (dispatch) => {
    dispatch({
      type: "CART_FETCHING",
    });
    var result = await authenticator({
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/cakecart",
      data: {},
    });
    if (result) {
      dispatch({
        type: "CART_SUCCESS",
        payload: result.data,
      });
    } else {
      dispatch({
        type: "CART_FAILURE",
      });
    }
  };
}

export function Placeorderthunk(data) {
  return async (dispatch) => {
    dispatch({
      type: "ORDER_PLACING",
    });
    var result = await authenticator({
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/addcakeorder",
      data: data,
    });
    if (result) {
      dispatch({
        type: "ORDER_PLACE_SUCCESS",
        payload: result.data,
      });
      
    } else {
      dispatch({
        type: "ORDER_PLACE_FAILURE",
      });
    }
  };
}

export function Fetchorderthunk() {
  return async (dispatch) => {
    dispatch({
      type: "ORDER_FETCHING",
    });
    var result = await authenticator({
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/cakeorders",
      data: {},
    });
    if (result) {
      dispatch({
        type: "ORDER_FETCH_SUCCESS",
        payload: result.data,
      });
      
    } else {
      dispatch({
        type: "ORDER_FETCH_FAILURE",
      });
    }
  };
}

export function AddCakethunk(data) {
  return async (dispatch) => {
    dispatch({
      type: "ADDING_CAKE",
    });
    var result = await authenticator({
      method: "post",
      url: process.env.REACT_APP_BASE_API + "/addcake",
      data: data,
    });
    if (result) {
      window.alert("Cake Added Successfully !")
      dispatch({
        type: "ADD_CAKE_SUCCESS",
        payload: result.data,
      });
      
    } else {
      dispatch({
        type: "ADD_CAKE_FAILURE",
      });
    }
  };
}