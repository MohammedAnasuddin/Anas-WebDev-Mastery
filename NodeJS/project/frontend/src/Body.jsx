import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Body() {
  return (
    <div >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Body;
