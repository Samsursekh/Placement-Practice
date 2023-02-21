import { Link } from "react-router-dom";
export default function Navbar() {

  return (
    <div  id="Navbar">

    <Link to="/">
        <p>HOME</p>
      </Link>

      <Link to="/product">
        <p>PRODUCT</p>
      </Link>

      <Link to="/cart">
        <p>CART</p>
      </Link>

      <Link to="/signup">
        <p>SIGNUP</p>
      </Link>

      <Link to="/login">
        <p>LOGIN</p>
      </Link>

    </div>
  );
}