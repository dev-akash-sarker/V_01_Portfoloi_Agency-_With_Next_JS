import React from "react";
import Menubar from "./Navbar/Menubar";
import Footer from "./Footer/Footer";
// import "../../../node_modules/bootstrap/scss";

export default function Layout({ children }) {
  return (
    <>
      <Menubar />
      {children}
      <Footer />
    </>
  );
}
