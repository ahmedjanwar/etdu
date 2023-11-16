import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ETdu. All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-4 mt-4">
          {/* Social Media Icons */}
          <a href="#" className="text-white hover:text-gray-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
