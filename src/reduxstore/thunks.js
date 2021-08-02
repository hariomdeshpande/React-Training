import axios from "axios"

 export  function Loginthunk(data){
    return async (dispatch)=>{
        dispatch({
            type:"LOGIN_FETCH"
        })
        var result  = await  axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/login",
            data:data
        })
        if(result.data.token){
            dispatch({
                type:"LOGIN_SUCCESS",
                payload:result.data
            })
        }
        else{
            dispatch({
                type:"LOGIN_FAILURE"
            })
        }
       
    }
}