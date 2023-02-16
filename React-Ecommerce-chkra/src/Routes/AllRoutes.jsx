import { Routes, Route } from "react-router-dom";
import React from 'react'
import Card from "../Components/Card";


function AllRoutes() {
  return (
 <Routes>
  <Route path="/" element={<Card/>} />
  
  
 </Routes>
  )
}

export default AllRoutes
