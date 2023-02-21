import React, { useState,  useEffect } from 'react'

function Product() {

    const [data, setData] = useState([]);
    const [filterBy, setFilterBy] =useState("")
    const [sortBy, setSortBy] =useState("price")
    const [limit, setLimit] = useState(10);
    const [order, setOrder] = useState("asc");
    const [totalpages, setTotalPages] =useState(data.totalPages|| 4)
        
    async function getData({ limit, filterBy, sortBy, order}){
      let res = await fetch(`https://api.escuelajs.co/api/v1/products?limit=${limit}&filter=${filterBy}&sort=${sortBy}&order=${order}`);
      let data = await res.json();
    //   console.log(data);
       setData(data);
    }


    useEffect(() => {
       getData({limit, filterBy, sortBy, order})
    },[limit, filterBy, sortBy, order])


    return (

      <div>
 <div className="img-div" >
 <img src='https://thumbs.dreamstime.com/z/autumn-winter-fashion-mannequins-fashion-clothing-shop-store-led-lights-display-shopping-mall-guangzhou-kwangchow-47516482.jpg' alt="mall" />
  </div>

  <div id="filterSort">
 <select id="filter" placeholder="filterBy" onChange={(e) => setFilterBy(e.target.value)}>
  <option value="">Filter by Category</option>
  <option value="furniture">Furniture</option>
  <option value="clothes">Clothes</option>
  <option value="electronics">Electronics</option>
  <option value="otros">Otros</option>
  <option value="shoes">Shoes</option>
 </select>

 <select id="sort" placeholder="orderOfSort" onChange={(e) => setOrder(e.target.value)}>
<option value="">Sort</option>
<option value="asc">ASCENDING</option>
<option value="desc">DESCNDING</option>
 </select>

 <select placeholder="limit" onChange={(e) => setLimit(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>

 



  </div>
     
        <div id="container">
            {
                data.map((e)=> {
                  return  <div id="box" key={e.id}>
                <img src={e.images} alt="images"/>
                <h2>{e.id}</h2>
                <h4>{e.price}</h4>
                <h3>{e.category.name}</h3>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
                <button>ADD TO CART</button>
                <button>DELETE</button> 
        </div>

                })
            }
        </div>
        </div>
   
    )
}

export default Product