import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function Cart(props) {
  let userToken = localStorage.getItem("userToken");
  // if (userToken == null) {
  //   alert("Please login to continue");
  //   props.history.push("/login");
  // }
  // const [cartdetails, setCartdetails] = useState({});
  // useEffect(() => {
  //   let apiurl = process.env.REACT_APP_BASE_API + "/cakecart";
  //   axios({
  //     url: apiurl,
  //     method: "post",
  //     data: {},
  //     headers: {
  //       authtoken: props.authToken,
  //     },
  //   }).then(
  //     (response) => {
  //       console.log("Response from Cart Api>>>>>>>>>", response);

  //       setCartdetails(response.data.data);
  //     },
  //     (error) => {
  //       console.log("Error in Fetching Cart>>>>>>>>>>>>", error);
  //     }
  //   );
  // }, []);
  // console.log(cartdetails)
  return (
    <div className="container-fluid pt-4">
      {userToken !== null && userToken !== undefined ? (
        <div>
          <h2>There are total {} cakes in Cart</h2>
          {/* {cartdetails &&
          Object(cartdetails).keys !== undefined &&
          cartdetails[0] !== null ? (
            <div>
              {cartdetails.keys().map((each, index) => {
                return <h2>{each.name}</h2>;
              })}
            </div>
          ) : null} */}
        </div>
      ) : null}
    </div>
  );
}

Cart = withRouter(Cart);
export default connect(function (state, props) {
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    authToken:
      state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
  };
})(Cart);
