
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login,  } from "../Redux/userLogin/action";
import { Button, Input } from '@chakra-ui/react'

const Register = () => {
     const [firstname, setName] = useState('')
     const [email, setEmail]= useState('')
     const [password, setPassword]= useState('')
     const dispatch = useDispatch();

     const submitHandeler=(e)=>{
       e.preventDefault()
       dispatch(login({firstname,email,password}))
     }

  return (
      <div  style={{ margin:"auto", border:"1px solid black" , height:"Auto",
      width:"25%", marginTop:"10%",
      padding:"1rem"
}} >
        <form  onSubmit={submitHandeler}  >
          <div>
            <h2 style={{fontWeight:"Bold" , fontSize:"1.5rem"}}>Register</h2>

            <label htmlFor="text">Name</label>
            <div>
                 <Input placeholder='Enter firstname' type="firstname" mr="1rem"
                  id="firstname" size='md'onChange={(e)=>setName(e.target.value)} />
            </div>

            <label htmlFor="email">Email Address</label>
            <div>
                 <Input placeholder='Enter email' type="email" mr="1rem"
                  id="email" size='md'onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
          </div>
          <div>
             <label htmlFor="password">Password</label>
            <div>
                  <Input placeholder='Enter Password' type="password" mr="1rem"
                  id="password" size='md'onChange={(e)=>setPassword(e.target.value)} />
            </div>

          </div>
          <div>
             <label htmlFor="password">Role</label>
            <div>
                  <Input placeholder='Enter role' type="role" mr="1rem"
                  id="password" size='md'onChange={(e)=>setPassword(e.target.value)} />
            </div>

          </div>
          <div>
            <Button className="primary" type="submit" >Register</Button>
          </div>
        </form>
      </div>
  );
};

export default Register;
