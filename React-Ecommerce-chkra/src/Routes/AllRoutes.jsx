import { Routes, Route } from "react-router-dom";
import React from 'react'
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import Product from "../Components/Product";
import Home from "../Components/Home";
import Cart from "../Components/Cart";


function AllRoutes() {
  return (
 <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/product" element={<Product/>}/>
  <Route path="/cart" element={<Cart/>} />
  <Route path="/signup" element={<Signup/>} />
  <Route path="/login" element={<Login/>} />
 </Routes>

  )
}

export default AllRoutes
