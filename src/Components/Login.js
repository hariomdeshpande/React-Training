import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { FetchCartthunk, Loginthunk } from "../reduxstore/thunks";


class Login extends Component {
  constructor() {
    super();
    // // initialising the state
    // this.state = {
    //   name: "Hariom",
    //   errorMessage: false,
    // };
  }
  user = {};

  handleEmail = (event) => {
    this.user.email = event.target.value;
  };
  handlePassword = (event) => {
    this.user.password = event.target.value;
  };
  login = (event) => {

    event.preventDefault();
    if (this.user.email == null || this.user.password == null) {
      alert("Enter Credentials !!");
    } else {
      this.props.dispatch(FetchCartthunk());
      this.props.dispatch(Loginthunk(this.user))
    }
  };
  
  render() {
    return (
      <div className="jumbotron container p-5 my-0 my-md-4" >
  

        {this.props.isuserloggedin!==undefined && this.props.isuserloggedin==false ?
        <form>
          <h1>Login Here</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              inputemail
              onChange={this.handleEmail}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              inputpass
              onChange={this.handlePassword}
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div>
            {this.props.error && (
              <label className="errormessage"> {this.props.error}</label>
            )}
          </div>
          
          {this.props.isloading && this.props.isloading === true ? (
            <Loader type="ThreeDots" color="#000000" height={100} width={100} />
          ) : null}
          <div className="d-flex my-4 justify-content-center">
            <button
              style={{ float: "right" }}
              onClick={this.login}
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
          <div className="d-flex mt-4 justify-content-between">
            <div>
              <Link to="/signup">New User ? Signup Here</Link>
            </div>
            <div>
              <Link to="/recover">Forgot Password ?</Link>
            </div>
          </div>
        </form>:this.props.history.push("./cakelist")}
      </div>
    );
  }
}

Login = withRouter(Login)
export default connect(function (state, props) {
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    isloading: state["AuthReducer"]["isloading"],
    name: state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"],
    error: state["AuthReducer"]["error"]
    
  }
})(Login)
