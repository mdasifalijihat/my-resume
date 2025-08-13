import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const RootLayout = () => {
  return (
   <div>
     <div className="container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>      
    </div>
    <Footer></Footer>
   </div>
  );
};

export default RootLayout;
