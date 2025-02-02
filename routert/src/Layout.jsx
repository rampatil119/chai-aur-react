import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";


function Layout() {
  return (
    <>
      <Header /> {/* Fixed component name */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout; // ✅ Ensure this export exists
