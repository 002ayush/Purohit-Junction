import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FooterComp from "./components/FooterComp";


function Layout() {
  return ( <>

        <Navbar />
        <Outlet />
        <FooterComp />
  
      </>);
}

export default Layout;
