import React, { useState } from 'react'
import axios from "axios"
// import { useNavigate,Link } from "react-router-dom";
export default function Login() {

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    async function Submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/signup",{
                email,password
            })
            .then(res=>{
                // eslint-disable-next-line no-cond-assign
                if(res.data="exist"){
                    alert("user already exist")
                    // eslint-disable-next-line no-restricted-globals
                    // history("/home",{state:{id:email}})

                // eslint-disable-next-line no-cond-assign
                }else if(res.data="not exist"){
                    // eslint-disable-next-line no-restricted-globals
                    history("/home",{state:{id:email}})
                    alert("user is not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }

    }
  return (
    <div className='login'>
        <h1>Signup</h1>

        <form action='POST'>
            <input type='email' onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' name='' id=''></input>
           
         <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' name='' id=''></input>
        
        <input type='submit' onClick={Submit}></input>
        </form>

        <br/>
        <p>OR</p>
        <br/>

        <link to="/">Login</link>
    </div>

  )
}
