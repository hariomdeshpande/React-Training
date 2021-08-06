import axios from "axios"
import { useState, useEffect } from "react"
import { Link, withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { FetchCartthunk } from "../reduxstore/thunks"
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>



function Navbar(props) {

  var [title, setTitle] = useState("HD Cake Gallery")
  var [searchtext, setSearchText] = useState(undefined)
  function search(e) {
    e.preventDefault()

    if (searchtext) {
      var url = "/search?q=" + searchtext
      props.history.push(url)
    }
  }
  function getSearchText(event) {
    setSearchText(event.target.value)
  }

  function logout() {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-3 align-items-center">
      <Link to="/" class="navbar-brand">{title}</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto md-w-100 xl-w-50 d-flex justify-content-around align-items-center">
          
          <Link to="/CakeList"> <button class="btn btn-outline-primary my-2 mx-4" type="button">CakeList</button></Link>
          <form class="form-inline my-2 mx-3 my-lg-0">
            <input onChange={getSearchText} id="searchinput" class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={search} class="btn btn-outline-success my-2"  type="submit">Search</button>
          </form>
          {props.name &&
            <span className="pl-3 h5 mb-0 text-light">
              Welcome {props.name}
            </span>
          }

        </ul>
        {props.isuserloggedin == false && <form class="d-flex justify-content-between my-2 my-lg-0">
          <Link to="/login"> <button class="btn btn-primary my-2"  type="submit">Login</button></Link>
        </form>}

        {props.isuserloggedin == true &&
          <form class="d-flex justify-content-around my-2 my-lg-0">
            <Link to="/cart"><button class="btn btn-warning my-2 mr-2" type="button">
              <i class="fa fa-shopping-cart fa-lg position-relative" style={{ color: "#fff" }}>
              </i>
            </button></Link>
            <Link to="/addcake"> <button class="btn btn-info my-2 mr-2 " type="button">Add Cake</button></Link>
            <Link to="/orders"> <button class="btn btn-success my-2 mr-2 " type="button">Orders</button></Link>
            <Link to="/login"> <button class="btn btn-danger my-2 mr-2 " onClick={logout} type="button">Logout</button></Link>

          </form>}


      </div>
    </nav>
    </div>    
  )

}

Navbar = withRouter(Navbar)
export default connect(function (state, props) {
  console.log(state)
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    name: state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"],
    cartData: state["CartReducer"]["cartitems"]["data"],
    // carttotal:state["CartReducer"]["cartitems"]["data"].length
  }
})(Navbar)



