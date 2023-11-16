import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="about-us bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-8">
          ETdu is dedicated to guiding students on their journey to international education. Our mission is to empower individuals to achieve their dreams through access to quality education.
        </p>

        <div className="flex justify-center">
          <div className="w-1/2">
            <img
              src="https://via.placeholder.com/500"
              alt="Team at ETdu"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
