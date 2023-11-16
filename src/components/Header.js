import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-blue-500 p-4 ${isSticky ? 'fixed top-0 left-0 right-0' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold cursor-pointer" onClick={scrollToTop}>
          <span className="text-yellow-300">ET</span>du
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-4">
          <Link to="hero" smooth={true} duration={500} offset={-50} className="text-white hover:text-yellow-300">
            Home
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-50} className="text-white hover:text-yellow-300">
            Services
          </Link>
          <Link to="about-us" smooth={true} duration={500} offset={-50} className="text-white hover:text-yellow-300">
            About Us
          </Link>
          <Link to="testimonials" smooth={true} duration={500} offset={-50} className="text-white hover:text-yellow-300">
            Testimonials
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-50} className="text-white hover:text-yellow-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
