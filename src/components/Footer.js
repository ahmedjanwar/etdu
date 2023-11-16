import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Side: Company Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/2">
          <p className="text-sm">
            Follow us on social media for updates and news!
          </p>
          <div className="mt-4">
            <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
          </div>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex justify-center items-center space-x-4 md:w-1/2">
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="#" className="text-white hover:text-gray-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>

      {/* Bottom Center: All Rights Reserved */}
      <div className="text-center mt-8">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} ETdu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
