import React from 'react'
import {useState} from "react"
import { useNavigate } from 'react-router-dom'



const init ={
    name:"",
    email:"",
    password:""
}

function Signup() {
    const [form, setForm] =useState(init)
    const Navigate = useNavigate();

    function handleChange(e){
        const {name,value} = e.target;
        setForm({...form, [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();

        localStorage.setItem("user",JSON.stringify(form))
        Navigate("/login")
        window.location.reload()


      console.log(form)
    }

    
    return (
<div>
      
    <form id="form" onSubmit={(e) => handleSubmit(e)}>

    <input type="url" name="img" placeholder='image' onChange={(e) => handleChange(e)}/><br/>

    <input name="name" type="text" placeholder="Username" onChange={(e) => handleChange(e)}/><br/>

    <input name="email" type="email" placeholder='Email' onChange={(e) => handleChange(e)} /><br/>

    <input name="password" type="password" placeholder="password" onChange={(e) => handleChange(e)}/><br/>
    
    <button type="submit">Submit</button>
    </form>
</div>
    )
}

export default Signup
