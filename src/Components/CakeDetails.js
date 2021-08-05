import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticator } from "..";
import { AddToCartthunk } from "../reduxstore/thunks";

function CakeDetails(props) {
  var [cakedetails, setCakedetails] = useState();
  var [loading, setLoading] = useState(1);
  useEffect(() => {
    var apiurl =
      process.env.REACT_APP_BASE_API +
      "/cake/" +
      props.match.params.parametername;
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        setLoading(0);
        setCakedetails(response.data);
      },
      (error) => {}
    );
  }, []);
  function addtocart() {
    var cakeData = {
      name: cakedetails.data.name,
      cakeid: cakedetails.data.cakeid,
      price: cakedetails.data.price,
      weight: cakedetails.data.weight,
      image: cakedetails.data.image,
    };
    console.log("Cakedetailsdata>>>>>>>>>>", cakedetails.data);
    if (props.isuserloggedin == true) {
      props.dispatch(AddToCartthunk(cakeData));
    } else {
      if (window.confirm("You must login to continue....!!")) {
        props.history.push("/login");
      }
    }
  }
  return (
    <div className="container">
      {loading && loading === 1 ? (
          <div className="loaderWrapper">
            <Loader type="ThreeDots" color="#000000" height={100} width={100} />{" "}
          </div>
      ) : null}

      {cakedetails && cakedetails !== undefined ? (
        <div className="product">
          <div className="d-flex flex-column flex-md-row p-4">
            <div className="col-12 col-md-6">
              <div className="productImage p-2">
                <img src={cakedetails.data.image} className="img-fluid"></img>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="cakeDetails p-2 d-flex flex-column flex-wrap align-items-start">
                <h2>{cakedetails.data.name} </h2>
                <div className="d-flex mt-3">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                </div>
                <div className="text-muted mt-3">
                  Reviews {cakedetails.data.reviews}
                </div>
                <div className="d-flex flex-wrap">
                  <div className="d-flex mt-4 align-items-center">
                    Price
                    <span className="px-3">
                      <h3 className="m-0 text-danger">
                        {" "}
                        &#8377;{cakedetails.data.price}{" "}
                      </h3>
                    </span>
                  </div>
                  <div className="d-flex flex-wrap mt-4 align-items-center">
                    Weight
                    <span className="px-3">
                      <h3 className="m-0 text-success">
                        {cakedetails.data.weight} Kg
                      </h3>
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="d-flex mt-4 align-items-center">
                    Flavour
                    <span className="px-3">
                      <h3 className="m-0 text-danger">
                        {cakedetails.data.flavour}
                      </h3>
                    </span>
                  </div>
                  <div className="d-flex mt-4 align-items-center">
                    Type
                    <span className="px-3">
                      {cakedetails.data.eggless == true && (
                        <h3 className="m-0 text-danger"> Egg </h3>
                      )}
                      {cakedetails.data.eggless == false && (
                        <h3 className="m-0 text-success"> Eggless </h3>
                      )}
                    </span>
                  </div>
                </div>
                <div className="d-flex mt-4 ingredientsList">
                  <div>
                    <div>Ingredients</div>
                    <ul>
                      {cakedetails && cakedetails.data.ingredients.length > 0
                        ? cakedetails.data.ingredients.map((item) => (
                            <li className="text-capitalize"> {item} </li>
                          ))
                        : null}
                    </ul>
                  </div>
                </div>
                <div>
                  <button className="btn btn-info" onClick={addtocart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

CakeDetails = withRouter(CakeDetails);
export default connect(function (state, props) {
  console.log(state);
  return {
    isuserloggedin: state["AuthReducer"]["isuserloggedin"],
    authToken:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
    loading: state["CartReducer"]["isloading"],
  };
})(CakeDetails);
