import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
// import Validation from '../pages/Validation';
import Blogs from '../pages/Blogs';
import AdminPage from '../pages/Boss';
import Customer from '../pages/Customer';
import Navbar from '../pages/Navbar';
import AddBook from '../pages/AddBook';
import Navus from '../pages/Navus';
import Wishlist from '../pages/Wishlist';
import ViewDetails from '../pages/ViewDetails';
import About from '../pages/About';

const Routers = () => {
  return (
    <>
    
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          {/* <Route path="/Validation" element={<Validation />} /> */}
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="/UserPage" element={<Customer/>} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Addbook" element={<AddBook />} />
          <Route path="/Navus" element={<Navus />} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/ViewDetails" element={<ViewDetails/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      
    </>
  );
};

export default Routers;
