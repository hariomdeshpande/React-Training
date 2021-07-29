import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

function Cart(props) {
  let userToken = localStorage.getItem("userToken");
  if (userToken == null) {
    alert("Please login to continue");
    props.history.push("/login");
  } 
    const [cartdetails,setCartdetails] = useState([]);
    useEffect(()=>{
    let apiurl = process.env.REACT_APP_BASE_API + "/cakecart";
    axios({
      url: apiurl,
      method: "post",
      requesObj: {},
      headers: {
        authtoken: props.authToken,
      },
    }).then(
      (response) => {
        console.log("Response from Cart Api>>>>>>>>>", response.data.data);
       
       setCartdetails((cartdetails)=>([...cartdetails,...response.data.data]))
        console.log("Data Here>>>>>>>>>>>>>>>>",cartdetails)
      },
      (error) => {
        console.log("Error in Fetching Cart>>>>>>>>>>>>", error);
      }
    );
    },[]);
    // console.log(cartdetails)
  return (
    <div className="container">
      {userToken !== null && userToken !== undefined ? (
        <div>
          <p>

          </p>
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
