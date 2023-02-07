import { Routes, Route } from "react-router-dom";
import Card1 from "../Components/Card1";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card1" element={<Card1 />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/card" element={<Card1/>} />

    </Routes>
  );
}

export default AllRoutes;
