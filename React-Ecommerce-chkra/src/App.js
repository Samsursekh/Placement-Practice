import "./App.css";
// import Card1 from "./Components/Card1";
import Footer1 from "./Components/Footer1";
// import Login from "./Components/Login";
// import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
// import Signup from "./Components/Signup";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      {/* <Navbar1/> */}
      <Navbar2/>
      {/* <Card1/> */}
      {/* <Login /> */}
      {/* <Signup /> */}
   
      <AllRoutes/>
      <Footer1 />
    </div>
  );
}

export default App;
