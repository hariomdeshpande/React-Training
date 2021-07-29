import queryString from "query-string"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import  axios from 'axios';

function Search(props){
  const [cakes, setCakes] = useState([]);
  let query = queryString.parse(props.location.search)
  // console.log("query is" , props)

  useEffect(()=>{
    // console.log("qery changed" , query)
    let apiurl = process.env.REACT_APP_BASE_API_URL + "/searchcakes?q="+ query.q
    axios.get('https://apifromashu.herokuapp.com/api/searchcakes?q=Chocolate%20Cake')
    .then((response) => {
      // console.log(response);
      if(response.data.message){
        alert(response.data.message)
      }else{
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>",response.data)
        setCakes(response.data.data)

      }
    })
    .catch(function (error) {
      console.log(error);
    });
  },[query.q])

  return (
    <div className="container">
      Search for {query.q}
      <div className="row">
        {cakes.length >0 && cakes.map((res)=>{
        return <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div className="my-list">
            <img src={res.image} alt={res.name} />
            <div className="offer"><Link to={`/cake/${res._id}`}>{res.name}</Link></div>
            <div className="offer">{res.price} ₹</div>
            <div className="offer"><a href="/cart" className="btn btn-info">Add To Cart</a></div>
          </div>
        </div>
        })}
        
      </div>
    </div>
 )
}

export default Search
