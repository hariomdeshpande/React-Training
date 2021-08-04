import { connect } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router";
import {
  AddToCartthunk,
  FetchCartthunk,
  Removefromcartthunk,
} from "../reduxstore/thunks";
import axios from "axios";

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
  return (
    <div>
      <h1 className="py-3">Cart Items</h1>
      {props.cartData && props.cartData !== undefined ? (
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
              </div>
            );
          })}
        </div>
      ) : null}
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
