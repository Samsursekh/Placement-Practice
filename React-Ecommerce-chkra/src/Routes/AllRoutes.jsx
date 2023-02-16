import { Routes, Route } from "react-router-dom";
import React from 'react'
import Card from "../Components/Card";
import Book from "../Components/Book";

function AllRoutes() {
  return (
 <Routes>
  <Route path="/" element={<Card/>} />
  <Route path="/book" element={<Book/>} />
 </Routes>
  )
}

export default AllRoutes
