import axios from "axios";
import {authenticator} from "../index";

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


