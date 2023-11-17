import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="hero bg-gray-800 text-white py-64">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Your Path to Global Education
        </h1>
        <p className="text-lg mb-8">
          Empowering students to achieve their dreams through international education.
        </p>
        <button className="bg-yellow-300 text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-400">
          <Link to="services" smooth={true} duration={500} offset={-50} >
            Explore Our Services
          </Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
