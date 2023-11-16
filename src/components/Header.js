import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          <span className="text-yellow-300">ET</span>du
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-4">
          <a href="#" className="text-white hover:text-yellow-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Services
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            About Us
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Blog
          </a>
          <a href="#" className="text-white hover:text-yellow-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
