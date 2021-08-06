import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { FetchCartthunk, Loginthunk, Recoverthunk } from "../reduxstore/thunks";


class Recoverpass extends Component {
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
  login = (event) => {
    
    event.preventDefault();
    if (this.user.email == null) {
      alert("Enter Credentials !!");
    } else {
      this.props.dispatch(Recoverthunk(this.user))
    }
  };
  

  render() {
    return (
      <div className="jumbotron container p-5 my-0 my-md-4" >
        
        <form>
          <h1>Password Reset</h1>
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
          <div>
            {this.props.error && (
              <label className="errormessage"> { this.props.error }</label>
            )}
          </div>
          <div>
            <Link to="/login">Go back to Login</Link>
          </div>
          {this.props.isloading && this.props.isloading === true ? (
            <Loader type="ThreeDots" color="#000000" height={100} width={100} />
          ) : null}
          <div>
            <button
              style={{ float: "right" }}
              onClick={this.login}
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
         
        </form>
      </div>
    );
  }
}

Recoverpass = withRouter(Recoverpass)
export default connect(function(state,props){
  return {
    isuserloggedin : state["AuthReducer"]["isuserloggedin"],
    isloading:state["AuthReducer"]["isloading"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"],
    error:state["AuthReducer"]["error"]
  }
})(Recoverpass)
