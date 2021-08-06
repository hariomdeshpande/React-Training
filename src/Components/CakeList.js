import Cake from "./Cake";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cakelist(props) {
  let [cakes, setCakes] = useState([])
  let [loading, setLoading] = useState(true)
 
  useEffect(() => {
    let apiurl = process.env.REACT_APP_BASE_API + "/allcakes"
    axios(
      {
        method: 'get',
        url: apiurl
      }
    ).then((response) => {
      setLoading(false)
      // console.log("response from all cakes api", response.data)
      setCakes(response.data.data)
    }, (error) => {
      console.log("error from all cakes api", error)
    })
  }, [])
  
  return (
    <div>
      
      <div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      {loading && loading === true ?
        <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
          /> </div> : null}

      <div className="d-flex flex-wrap justify-content-center">
        {cakes.map((each, index) => {
          // console.log("picking cakes one by one", index, each)
          return <Cake key={index} data={each} />
        })}

      </div>
    </div>
  )
}

Cakelist = withRouter(Cakelist)
export default connect(function (state, props) {
  console.log(state)
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    name: state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"],
    cartData: state["CartReducer"]["cartitems"]["data"],
  }
})(Cakelist)