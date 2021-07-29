import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";


class Login extends Component {

    constructor() {
        super()
        // initialising the state
        this.state = {
            name: "Hariom",
            loading:0,
            errorMessage:false
        }
    }
    user = {}

    handleEmail = (event) => {
        this.user.email = event.target.value
    }
    handlePassword = (event) => {
        this.user.password = event.target.value
    }
    login = (event) => {
        event.preventDefault();
        if(this.user.email==null || this.user.password==null){
            alert("Enter Credentials !!")
        }
        else{
        this.setState({loading:1});
        let apiurl = "https://apifromashu.herokuapp.com/api/login"
        axios({
            method: "post",
            url: apiurl,
            data: this.user
        }).then((response) => {
            localStorage.setItem('userToken',response.data.token)
            if (response.data.token) {
                this.setState({loading:0});
               
                this.props.dispatch({
                    type:"LOGIN",
                    payload:response.data
                })
                this.props.history.push("/CakeList")
                
            } else {
                this.setState({errorMessage:true})
                this.setState({loading:0});               
            }

        }, (error) => {
            console.log(error)
        })
        
        }
        
        
    }

    render() {
        const {loading} = this.state;
        return (
            <div style={{ width: "50%", margin: "auto" }}>
                <form>
                    <h1>Login Here</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input inputemail onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input inputpass onChange={this.handlePassword} type="password" class="form-control" placeholder="Password" />
                    </div>
                    <div>
                    { this.state.errorMessage &&
                            <label className="errormessage"> Invalid Credentials</label>
                        }
                    </div>
                    <div>
                        <Link to="/signup">New User? Signup Here</Link>
                    </div>
                    {
                        loading && loading===1?
                        <Loader
                        type="ThreeDots"
                        color="#000000"
                        height={100}
                        width={100}
                    />:null}
                    
                    <div>
                        
                        <button style={{ float: "right" }} onClick={this.login} type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Login = withRouter(Login)
export default connect()(Login)