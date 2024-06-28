import React from 'react';
import Carousel from '../pages/Carousal'; // Adjust the import path if needed
import BooksByCategory from './BooksByCategory';
import EnquiryForm from './EnquiryForm';
import Arrival from './Arrival';
import Ad from './Ad';
import Authors from './Authors';

const Home = () => {
  return (
    <div>
     
      <Carousel />
      <Ad />
      <BooksByCategory />
      <Arrival />
      <Authors />
      <EnquiryForm />
    </div>
  );
};

export default Home;
