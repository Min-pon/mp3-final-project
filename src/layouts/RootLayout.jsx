import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Rootlayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default Rootlayout;
