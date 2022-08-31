import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./actionType"
import {Axios} from "axios";


export const login = ({email,password})=>(dispatch)=>{
  dispatch({type:USER_LOGIN_REQUEST, payload:{email, password}})

  try {
    const {data} = Axios.post('http://localhost:7089/login', {email,password})
    console.log(data);
    dispatch({type:USER_LOGIN_SUCCESS, payload:{data}});
    localStorage.setItem("user", JSON.stringify({data}))

    
  } catch (error) {
    dispatch({type:USER_LOGIN_FAIL, payload: error.response &&
       error.response.data.message ?
       error.response.data.message:error.message})
  }
}