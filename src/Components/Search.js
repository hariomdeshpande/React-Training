import queryString from "query-string";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Cake from "./Cake";

function Search(props) {
  
  let [loading, setLoading] = useState(true);
  let [cakeresults, setCakeresults] = useState();
  let query = queryString.parse(props.location.search).q;
  

  useEffect(() => {
    
    let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query;
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        setCakeresults(response.data.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query]);

  return (
    <div className="p-4">
      <h1>Search Cakes for {query} </h1>

      { loading && loading === true ?
      <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
          /> </div>: null}
          
        {cakeresults && cakeresults!==undefined ?
          <div className="product d-flex flex-wrap p-2">
            { cakeresults.map((each, index) => {
              return <Cake key={index} data={each} />;
            })}
          </div>
        :null}
        
        {cakeresults && cakeresults.length==0?
          <h2 className="text-danger">No Cakes Found</h2>
        :null}
    </div>
  );
}

export default Search;
