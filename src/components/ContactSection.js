import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact bg-gray-800 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

        <p className="text-lg mb-8">
          Have questions or ready to start your journey with ETdu? Reach out to us!
        </p>

        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="text-blue-500">Email:</span>
          <a href="mailto:info@etdu.app" className="underline">info@etdu.app</a>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <span className="text-blue-500">Phone:</span>
          <span>+251 123 456 789</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
