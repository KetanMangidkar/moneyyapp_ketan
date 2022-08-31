
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from '@chakra-ui/react'
import { login } from "../Redux/userLogin/action.js";

const LoginPage = () => {
     const [email, setEmail]= useState('')
     const [password, setPassword]= useState('')
     const dispatch = useDispatch();
     console.log(email, password);
     const submitHandeler=(e)=>{
       e.preventDefault()

       dispatch(login({email,password}));
      
     }

  return (
      <div  style={{ margin:"auto", border:"1px solid black" , height:"Auto",
      width:"20%",Align:"center", justifyContent:"center", marginTop:"10%",
      padding:"1rem"
}} >
        <form  onSubmit={submitHandeler}  >
          <div>
            <h2 style={{fontWeight:"Bold" , fontSize:"1.5rem"}}>Login</h2>

            <label htmlFor="email">Email Address</label>
            <div>
                 <Input placeholder='Enter email' type="email" mr="1rem"
                  id="email" size='md'onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
          </div>
          <div>
             <label htmlFor="password">Password</label>
            <div>
                  <Input placeholder='Enter email' type="password" mr="1rem"
                  id="password" size='md'onChange={(e)=>setPassword(e.target.value)} />
            </div>

          </div>
          <div>
            <button className="primary" type="submit" value="submit" border="1px solid black">Submit</button>
          </div>
        </form>
      </div>
  );
};

export default LoginPage;
