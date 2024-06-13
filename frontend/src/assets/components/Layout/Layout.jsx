import React from 'react';
import Header from './../Header/Header'; // Assuming Header component is in the same directory as Layout
import Routers from "../../../router/Routers";
import Footer from './../Footer/Footers'; // Assuming Footer component is in the same directory as Layout

const Layout = () => {
  return (
    <>
    <Header/>
    <Routers/>
    <Footer/>
    </>
  );
};

export default Layout;
