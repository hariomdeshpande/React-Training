import queryString from "query-string";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Cake from "./Cake";

function Search(props) {
  
  var [loading, setLoading] = useState(true);
  var [cakeresults, setCakeresults] = useState();
  var query = queryString.parse(props.location.search).q;
  

  useEffect(() => {
    let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query;
    axios({
      method: "get",
      url: apiurl,
    }).then(
      (response) => {
        setCakeresults(response.data.data);
        setLoading(false);
        
        console.log("cakeresults", cakeresults);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [query]);

  return (
    <div className="p-4">
      <h1>Search Cakes for {query} </h1>
      
        {cakeresults && cakeresults!==undefined?
          <div className="product d-flex flex-wrap p-2">
            { cakeresults.map((each, index) => {
              return <Cake key={index} data={each} />;
            })}
          </div>
        :null}
    </div>
  );
}

export default Search;
