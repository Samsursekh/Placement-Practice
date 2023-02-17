import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Video from "./Components/Video";
import AllRoutes from "./Routes/AllRoutes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Video/>
      <AllRoutes/>
      <Footer />
    
    </div>
  );
}

export default App;
