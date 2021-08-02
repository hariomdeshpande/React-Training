import { connect } from "react-redux"
import { useEffect } from "react"
import { withRouter } from "react-router"

function Cart(props){
    useEffect(()=>{
        props.dispatch({
            type:"Cart_Items"
        })
    })
    return (
        <div>
            <h1>Cart Page</h1>
            <h2></h2>
        </div>
    )
}

Cart = withRouter(Cart)
export default connect(function(state,props){
  return {
    isuserloggedin : state["AuthReducer"]["isuserloggedin"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"]
  }
})(Cart)