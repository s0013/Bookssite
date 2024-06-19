import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../Header/Header'; // Assuming Header component is in the same directory as Layout
import Routers from "../../../router/Routers";
import Footer from './../Footer/Footers'; // Assuming Footer component is in the same directory as Layout

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header hideNavbar={location.pathname.includes('UserPage') || location.pathname.includes('AdminPage') || location.pathname.includes('adminPage') || location.pathname.includes('ViewDetails')} />
      <Routers />
      <Footer />
    </>
  );
};

export default Layout;
