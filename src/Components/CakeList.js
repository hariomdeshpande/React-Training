import Cake from "./Cake";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

function Cakelist(props) {
  var [cakes, setCakes] = useState([])
  var [loading,setLoading] = useState(1)
  useEffect(() => {
    let apiurl = process.env.REACT_APP_BASE_API + "/allcakes"
    axios(
      {
        method: 'get',
        url: apiurl
      }
    ).then((response) => {
      setLoading(0)
      // console.log("response from all cakes api", response.data)
      setCakes(response.data.data)
    }, (error) => {
      console.log("error from all cakes api", error)
    })

  }, [])
  return (
    
    <div>
      
      { loading && loading === 1 ?
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
          /> : null}

      <div className="d-flex flex-wrap">
        {cakes.map((each, index) => {
          // console.log("picking cakes one by one", index, each)
          return <Cake key={index} data={each} />
        })}

      </div>
    </div>
  )
}

export default Cakelist