import { Outlet } from "react-router-dom";
import "./App.css";

import Footer from "./shared/footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar/>

      <Outlet />

      <Footer></Footer>
    </>
  );
}

export default App;
