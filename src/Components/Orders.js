import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Fetchorderthunk } from "../reduxstore/thunks";
import { useEffect } from "react";
import Loader from "react-loader-spinner";

function Orders(props) {
    useEffect(() => {
        if (props.isuserloggedin == true) {
            props.dispatch(Fetchorderthunk());
        } else {
            if (window.confirm("Login to continue")) {
                props.history.push("/login");
            }
        }
    }, []);
    return (
        <div className="container pt-4">
            <h2>Orders History</h2>
            { props.loading && props.loading == true ?
      <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
          /> </div>: null}
            {props.orders && props.orders !== undefined && props.loading!==true ? (
                <div className="jumbotron  p-4">
                    {props.orders.map((each, index) => {
                        return (
                            <div>
                                <div className="d-flex flex-wrap justify-content-between py-2">
                                <h4>Order No : {index + 1}</h4>
                                <h4> Order id : {each.orderid}</h4>
                                </div>
                                
                                <div className="d-flex flex-wrap justify-content-between py-2">
                                    <h4>
                                        Order Status :{" "}
                                        {each.pending ? (
                                            <span className="text-danger">Pending</span>
                                        ) : (
                                            <span className="text-success">Completed</span>
                                        )}
                                    </h4>
                                    <h4>Order Value : &#8377; {each.price}</h4>
                                </div>
                                    <h4>Total Items : {each.cakes.length}</h4>
                                <div>
                                    <ul className="orderDataList w-100">
                                        {each && each.cakes.length > 0 ? 
                                        each.cakes.map((item) => (
                                                <li className="text-capitalize mt-3"> 
                                                    <div className="d-flex justify-content-between">
                                                        <span className="mr-4">{item.name}</span>
                                                        <span> &#8377; {item.price}</span> 
                                                    </div>
                                                </li>
                                            ))
                                            : null}
                                    </ul>
                                </div>
                                
                                <hr className="bg-secondary"></hr>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </div>
    );
}

Orders = withRouter(Orders);
export default connect(function (state, props) {
    console.log(state);
    return {
        isuserloggedin: state["AuthReducer"]["isuserloggedin"],
        loading:state["OrderReducer"]["isloading"],
        orders: state["OrderReducer"]["orderfetchresponse"]["cakeorders"],
    };
})(Orders);
