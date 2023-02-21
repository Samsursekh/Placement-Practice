import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'


const init ={
    email:"",
    password:""
}

function Login() {
    const [form, setForm] =useState(init)
    const Navigate = useNavigate();

    let user = JSON.parse(localStorage.getItem("user")) || [];

    function handleChange(e){
        const {name,value} = e.target;
        setForm({...form, [name]:value})
    }

    function handleSubmit(e){
        const {email, password} = form
        e.preventDefault();
       if(email==="" && password ===""){
          alert("fill the details first");
      }

      else if(user.password ===password && user.email ===email){
         alert("login is sucessfully")
         Navigate("/product")

    }else{
       alert("invalid Credientials")
    }



        // localStorage.setItem("user",JSON.stringify(form))
        
        window.location.reload()

      console.log(form)
    }



    
    return (
<div>
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
    {/* <h1>Login Form</h1> */}

    <input name="email" type="email" placeholder='Email' onChange={(e) => handleChange(e)} /><br/>

    <input name="password" type="password" placeholder="password" onChange={(e) => handleChange(e)}/><br/>
    
    <button type="submit">Submit</button>
    </form>
</div>
    )
}

export default Login
