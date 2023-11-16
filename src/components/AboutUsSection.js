import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="about-us bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Image */}
        <div className="mb-8 md:mb-0 md:w-2/5">
          <img
            src={require('../images/AboutUs.jpg')} // Replace with the actual path to your image
            alt="About Us"
            className="rounded-md shadow-md"
          />
        </div>

        {/* Right Side: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4">
            ETdu is more than just an education consultancy. We are a dedicated team
            passionate about guiding students on their journey to global education.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to empower students with the knowledge and resources
            needed to succeed in a rapidly changing world. We believe in the
            transformative power of education and strive to make the process
            seamless for every aspiring student.
          </p>
          <p className="text-gray-700">
            Whether you're dreaming of studying in Finland or any other part of
            the world, ETdu is here to turn those dreams into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
