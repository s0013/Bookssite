import React from 'react';
import Carousel from '../pages/Carousal'; // Adjust the import path if needed
import BooksByCategory from './BooksByCategory';

const Home = () => {
  return (
    <div>

      <Carousel />
      <BooksByCategory />
    </div>
  );
};

export default Home;
