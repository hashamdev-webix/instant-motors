import React from 'react';
import Hero from './Hero';
import FeaturedCars from './FeaturedCars';
import QuickSearch from './QuickSearch';
import Testimonials from './Testimonails';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <QuickSearch />
      <FeaturedCars />
      <Testimonials />
    </div>
  );
};

export default Home;