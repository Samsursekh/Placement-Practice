import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Cart() {
  const params = useParams();
  const [data, setData] = useState({});

  const navigate = useNavigate();

  async function HandleGetData() {
    const { product_id } = params;

    let res = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${product_id}`
    );
    // console.log(res.data.data,"spec data")
    setData(res.data);
  }
  //  console.log(data)

  useEffect((e) => {
    HandleGetData();
  }, []);

  function AddToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let localdata = cart.filter((e) => {
      return e.id == data?.id;
    });

    if (localdata.length == 0) {
      cart.push({
        ...data,
        quantity: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
      alert("data added");
      navigate("/Payment");
    } else {
      alert("data already exsts");
    }
  }

  return (
    <div>
      <img src={data.images} alt="wish" />
      <h3>{data.title}</h3>
      <p>{data.price}</p>
      <p>{data.category}</p>
      <p>{data.description}</p>
      <button onClick={AddToCart}>ADD TO CART</button>
    </div>
  );
}

export default Cart;
