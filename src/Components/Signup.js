import { PureComponent } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


class Signup extends PureComponent {
    constructor() {
        super()
        // initialising the state
        this.state = {
            name: "Hariom",
            loading: 0
        }
    }
    user = {}
    handleEmail = (event) => {
        this.user.email = event.target.value
    }
    handlePassword = (event) => {
        this.user.password = event.target.value
    }
    handleName = (event) => {
        this.user.name = event.target.value
    }
    signup = (event) => {
        if (this.inputEmail == undefined || this.inputName == undefined || this.inputPass == undefined) {
            alert("Please Enter Missing Info")
        } else {
            event.preventDefault()
            let apiurl = "https://apifromashu.herokuapp.com/api/register"
            axios({
                method: "post",
                url: apiurl,
                data: this.user
            }).then((response) => {
                console.log('response', response)
            }, (error) => {
                console.log('error', error)
            })

        }
    }
    render() {
        return (
            <div className="jumbotron container p-5 my-0 my-md-4" >

                <form>
                    <h1>Signup Here</h1>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input inputName onChange={this.handleName} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input inputEmail onChange={this.handleEmail} type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input inputPass onChange={this.handlePassword} type="password" class="form-control" placeholder="Password" />
                    </div>
                    <div>
                        <label className="errormessage">{this.state.errorMessage}</label>

                        <div>
                            <Link to="/login">Go back to Login</Link>
                            <button style={{ float: "right" }} onClick={this.signup} type="submit" class="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup