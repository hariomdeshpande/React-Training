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
        <div className="container-fluid pt-4">
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
                <div className="p-4">
                    {props.orders.map((each, index) => {
                        return (
                            <div>
                                <h4>Order No : {index + 1}</h4>
                                <h4> Order id : {each.orderid}</h4>
                                <h4>
                                    Order Status :{" "}
                                    {each.pending ? (
                                        <span className="text-danger">Pending</span>
                                    ) : (
                                        <span className="text-success">Completed</span>
                                    )}
                                </h4>
                                <div className="d-flex justify-content-between">
                                    <h4>Total Items : {each.cakes.length}</h4>
                                    <h4>Order Value : &#8377; {each.price}</h4>
                                </div>
                                <div>
                                    <ul className="orderDataList">
                                        {each && each.cakes.length > 0 ? 
                                        each.cakes.map((item) => (
                                                <li className="text-capitalize"> <h6>{item.name}</h6> </li>
                                            ))
                                            : null}
                                    </ul>
                                </div>
                                
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
