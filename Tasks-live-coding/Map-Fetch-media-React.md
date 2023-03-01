# create a array of object ? and map data in react?

//App.jsx ==> 

import {  useState, useEffect } from "react"
import "./styles.css"

export default function App(){
  const [data, setData] = useState([])

  async function getData(){
    let res = await fetch('https://fakestoreapi.com/products')
    let data = await res.json();
    console.log(data); 
    setData(data);
    return data;
  }

  useEffect(() => {
    getData();
  },[])

  return(
    <div id="container">
      {
        data.map((e,id) => {
          return <div key={e.id}>
            <img src="https://avatars.githubusercontent.com/u/103947245?v=4" alt="priya" />
            <h3>{e.title}</h3>
            <p>{e.price}</p>
            <p>{e.rating.rate}</p>
            <p>{e.rating.count}</p>
            <p>{e.description}</p>
            <button id="wish">WISH</button>
            <button id="delete">DELETE</button>
          </div>
        })
      }
      </div>
  )
}

//styles.css ==> 

body{
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
}

/* basic css start here  */
#container{
  display: grid;;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap:10px;
  margin:auto;
}

#container div{
  text-align: center;
  border:5px solid black;
  height:auto;
  width:250px;
  border-radius: 10px;
  padding:20px;
  background-color:pink;
}
#container div img{
  width:170px;
  border-radius: 10px;
}

#container button{
  margin-right: 10px;
  width: 80px;
  height:40px;
  border-radius: 10px;
}
#wish{
  background-color: green;
  color: white;
  font-size: 16px;
  border: none;
}
#delete{
  background-color: red;
  color: white;
  font-size: 16px;
  border: none;
}

 /* responsivness start here */

@media only screen and (max-width: 1100px){
  #container{
      grid-template-columns: repeat(3, 1fr);
  }
  #container div{
    background-color: indianred;
  }
  
}
@media only screen and (max-width: 900px){
  #container{
    grid-template-columns: repeat(2, 1fr);
}
#container div{
  background-color:teal
}
}
@media only screen and (max-width: 368px){
  #container{
    grid-template-columns: repeat(1, 1fr);
}
#container div{
  background-color: blueviolet
}
}
