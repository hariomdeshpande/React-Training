import { PureComponent} from "react";
import axios from "axios";



class Signup extends PureComponent{
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Hariom",
            loading:0
        }
    }
    user ={}
    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    handleName = (event)=>{
        this.user.name= event.target.value
      }
    signup = (event)=>{
        if(this.inputEmail==undefined || this.inputName==undefined || this.inputPass==undefined){
            alert("Please Enter Missing Info")
        }else{
            event.preventDefault()
        let apiurl = "https://apifromashu.herokuapp.com/api/register"
        axios({
            method:"post",
            url:apiurl,
            data:this.user
        }).then((response)=>{
            console.log('response',response)
        },(error)=>{
            console.log('error',error)
        })
       
    }
        }
    render(){
        return (
            <div style={{width:"50%" , margin:"auto"}}>
                              
                <form>
                <h1>Signup Here</h1>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input inputName onChange={this.handleName} type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input inputEmail onChange={this.handleEmail} type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input inputPass onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                </div>
                <div>
                <label className="errormessage">{this.state.errorMessage}</label>
                <button style={{float:"right"}} onClick={this.signup} type="submit" class="btn btn-primary">Signup</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Signup