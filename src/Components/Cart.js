import { connect } from "react-redux";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { FetchCartthunk } from "../reduxstore/thunks";
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
  function addItem(){
    // let apiurl = process.env.REACT_APP_BASE_API + "/addcaketocart";
    //   axios({
    //     url: apiurl,
    //     headers: {
    //       authtoken: props.authToken,
    //     },
    //     method: "post",
    //     data: this.each,
    //   }).then(
    //     (response) => {
    //       console.log(response)
    //       alert(response.data.data.name + " added to cart Successfully");
    //     },
    //     (error) => {
    //       console.log("error from cakefetch in cake compo ", error);
    //     }
    //   );
    console.log(this.cakeid)
  }
  function removeItem(){
    console.log("Remove Item")
  }
  return (
    <div>
      <h1 className="py-3">Cart Items</h1>
      {props.cartData && props.cartData !== undefined ? (
        <div className="jumbotron py-2">
          {props.cartData.map((each, index) => {
            return (
            <div className="h6 d-flex justify-content-between align-items-center my-4 cartItem">
                <div>{index+1} <span> <img className="cartProductImage" src={each.image} /> </span> {each.name}</div><div className="text-center">{each.price}</div><div><button className="addItemButton" onClick={addItem} value={each.cakeid}>+</button><span className="mx-3">{each.quantity}</span><button onClick={removeItem}>-</button></div>
            </div>);
          })}
        </div>
      ) : null}
    </div>
  );
}

Cart = withRouter(Cart);
export default connect(function (state, props) {
  console.log(state)
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    cartData: state["CartReducer"]["cartitems"]["data"],
    
  };
})(Cart);
