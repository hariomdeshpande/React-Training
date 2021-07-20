import {Component} from 'react';

class Signup extends Component(){
    constructor(){
    super()
    this.state={
        name:"Hariom",
    }
    user = {}
    handleEmail = (event)=>{
        this.user.email = event.target.value
    }
    handlePass = (event)=>{
        this.user.password = event.target.value
    }
    handleName = (event)=>{
        this.user.name = event.target.value
    }
    signup = (event)=>{
        this.setState({
            name:"Hariom",
            errorMessage:"Not Hariom"
        })
    }
    }
}