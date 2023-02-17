import React, { useState,  useEffect } from 'react'
import axios from 'axios'

function Card() {

    const [data, setData] = useState([])
        
    async function getData(){
      let res = await fetch(`https://api.escuelajs.co/api/v1/products`);
      let data = await res.json();
    //   console.log(data);
       setData(data);
    //   

    }

    useEffect(() => {
       getData()
    })


    return (
        <div id="container">
            {
                data.map((e)=> {
                  return  <div id="box" key={e.id}>
                {/* <img src={e.images} alt="images"/> */}
                <h3>{e.id}</h3>
                <h3>{e.title}</h3>
                <h4>{e.price}</h4>
                <p>{e.description}</p>
                <p>{e.category.name}</p>
                <button>ADD TO CART</button>
                <button>DELETE</button>
                    

            
        </div>
                })
            }
        </div>
    )
}

export default Card
