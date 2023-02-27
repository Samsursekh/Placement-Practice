import React from 'react'
import {useState} from 'react'

function User() {

const [data, setData]=useState()
console.log(data)

function handleClick(){
    
    let res = fetch('https://randomuser.me/api').then((res) => res.json()).then((res) =>setData(res.results))
}


    return (
        <div>
            <button style={{padding:"10px", width:"100px",marginTop:"30px", backgroundColor:"red", color:"white", fontSize:"20px", borderRadius:"10px", border:"none" }}
            onClick={() => handleClick()}>Fetch</button>

 
            <table style={{padding:"40px", marginTop:"60px", margin:"auto", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"20px", lineHeight:"30px"}}>
                {
                    data?.map(e=> <div>
                    <tr>
                        <th>Name</th>
                        <td>{e.name.title+" "+e.name.first+" "+e.name.last}</td>
                    </tr>
                    <tr>
                        <th>gender</th>
                        <td>{e.gender}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{e.email}</td>
                    </tr>
                    <button style={{padding:"10px", width:"100px",marginTop:"30px", backgroundColor:"green", color:"white", fontSize:"20px", borderRadius:"10px", border:"none" }}>Delete</button>

                 
                    </div>)
                }
                
                
           </table>
         
        </div>
    )
}

export default User
