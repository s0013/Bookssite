import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
import Carousal from '../pages/Carousal';
import Back from '../pages/Back';
import Buy from '../pages/Buy';
import Modal from '../pages/Modal';
import Purchases from '../pages/Purchases';
import BooksByCategory from '../pages/BooksByCategory';
import All from '../pages/All'
import EnquiryForm from '../pages/EnquiryForm'
import Arrival from '../pages/Arrival';
import Ad from '../pages/Ad';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      {/* <Route path="/Validation" element={<Validation />} /> */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/AdminPage" element={<AdminPage />} />
      <Route path="/UserPage" element={<Customer />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Addbook" element={<AddBook />} />
      <Route path="/Navus" element={<Navus />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/ViewDetails" element={<ViewDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/Carousal" element={<Carousal />} />
      <Route path="/Back" element={<Back />} />
      <Route path="/Buy" element={<Buy />} />
      <Route path="/Model" element={<Modal />} />
      <Route path="/Purchases" element={<Purchases />} />
      <Route path="/BooksByCategory" element={<BooksByCategory />} />
      <Route path="/All" element={<All />} />
      <Route path="/EnquiryForm" element={<EnquiryForm />} />
      <Route path="/Arrival" element={<Arrival />} />
      <Route path="/Ad" element={<Ad />} />
  

    </Routes>
  );
};

export default Routers;
