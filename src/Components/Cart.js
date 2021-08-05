import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import {
  AddToCartthunk,
  FetchCartthunk,
  Placeorderthunk,
  Removefromcartthunk,
} from "../reduxstore/thunks";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart(props) {
  useEffect(() => {
    if (props.isuserloggedin) {
      props.dispatch(FetchCartthunk());
    } else {
      alert("Please login to Continue");
      props.history.push("/login");
    }
  }, []);
  const btn_additem = (id, cakeid) => {
    const newitemlist = props.cartData.filter((cake) => {
      return Object.values(cake).join(" ").includes(cakeid);
    });

    var datacake = {
      name: newitemlist[0].name,
      cakeid: newitemlist[0].cakeid,
      price: newitemlist[0].price,
      weight: newitemlist[0].weight,
      image: newitemlist[0].image,
    };

    console.log("????", datacake);
    props.dispatch(AddToCartthunk(datacake));
  };
  const btn_removeitem = (id, cakeid) => {
    const newitemlist = props.cartData.filter((cake) => {
      return Object.values(cake).join(" ").includes(cakeid);
    });

    var datacake = {
      name: newitemlist[0].name,
      cakeid: newitemlist[0].cakeid,
      price: newitemlist[0].price,
      weight: newitemlist[0].weight,
      image: newitemlist[0].image,
    };

    console.log("????", datacake);
    props.dispatch(Removefromcartthunk(datacake));
  };
  let grandTotal = []
  let userData = {}
  function price(total) {
      grandTotal.push(total)
      return total
  }
  
  let [userForm,setForm]=useState(false);
  
  function showForm(){
    setForm(true)
  }
  
  function submitForm(e){
    e.preventDefault();
    let grandTotalAmount = grandTotal.reduce((a, b) => a + b, 0)
    let orderData = {name:userData.name,
      address:userData.address,
      city:userData.city,
      pincode:userData.pincode,
      phone:userData.phone,
      area:userData.area,
      price:grandTotalAmount,
      cakes:props.cartData
    }
    props.dispatch(Placeorderthunk(orderData))
  }
  return (
    <div className="container pt-4">
      <h1 className="py-3">Cart</h1>
      { props.cartData && props.cartData !== undefined && props.cartData.length>0 ? (
        <div className="jumbotron py-2">
          {props.cartData.map((each, index) => {
            return (
              <div className="h6 d-flex justify-content-between align-items-center my-4 cartItem">
                <div>
                  {index + 1}{" "}
                  <span>
                    {" "}
                    <img className="cartProductImage" src={each.image} />{" "}
                  </span>{" "}
                  {each.name}
                </div>
                <div className="text-center">{each.price}</div>
                <div>
                  <button
                    className="addItemButton"
                    onClick={() => btn_additem(index, each.cakeid)}
                  >
                    +
                  </button>
                  <span className="mx-3">{each.quantity}</span>
                  <button onClick={() => btn_removeitem(index, each.cakeid)}>
                    -
                  </button>
                </div>
                <div>Total : {price(each.quantity*each.price)}</div>
              </div>
            );
          })}
          <hr></hr>
          <div className="h3 text-right">Grand Total : <span className="text-danger"> {grandTotal.reduce((a, b) => a + b, 0)}</span>  </div>
          <div className="h2 text-center "> <button className="btn btn-danger btn-lg" onClick={showForm}> Continue </button> </div>
          { userForm && userForm!==undefined ?( 
            <div>
              <form className="form">
                  <div class="form-group">
                    <label for="username">Name</label>
                    <input type="text" onChange={(e)=>{userData.name = e.target.value}} name="username" class="form-control" id="username"/>
                  </div>
                  <div class="form-group">
                    <label for="useraddress">Address</label>
                    <input type="text" onChange={(e)=>{userData.address = e.target.value}} class="form-control" id="useraddress"/>
                  </div>
                  <div class="form-group">
                    <label for="userarea">Area</label>
                    <input type="text" onChange={(e)=>{userData.area = e.target.value}} class="form-control" id="userarea"/>
                  </div>
                  <div class="form-group">
                    <label for="usercity">City</label>
                    <input type="text" onChange={(e)=>{userData.city = e.target.value}} class="form-control" id="usercity"/>
                  </div>
                  <div class="form-group">
                    <label for="userpincode">Pincode</label>
                    <input type="text" onChange={(e)=>{userData.pincode = e.target.value}} class="form-control" id="userpincode"/>
                  </div>
                  <div class="form-group">
                    <label for="userphone">Phone</label>
                    <input type="text" onChange={(e)=>{userData.phone = e.target.value}} class="form-control" id="userphone"/>
                  </div>
                  <button type="submit" class="btn btn-primary" onClick={submitForm}>Submit</button>
              </form>
            </div>):null}
        </div>
      ) : <div className="d-flex flex-column align-items-center">
          <h2 className="text-danger">No Items in Your Cart !!</h2>
          <Link to="./cakelist"> <button className="btn mt-4 btn-primary">Explore Menu</button>  </Link>
        </div>}
    </div>
  );
}

Cart = withRouter(Cart);
export default connect(function (state, props) {
  console.log(state);
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    cartData: state["CartReducer"]["cartitems"]["data"],
  };
})(Cart);
