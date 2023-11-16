import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>

        <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Testimonial 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
            <p className="text-gray-700 mb-4">
              "ETdu made my dream of studying abroad a reality. The personalized guidance and support were invaluable."
            </p>
            <p className="text-blue-500 font-bold">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
            <p className="text-gray-700 mb-4">
              "Exceptional services! From application assistance to settling in a new country, ETdu was with me every step of the way."
            </p>
            <p className="text-blue-500 font-bold">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex-1">
            <p className="text-gray-700 mb-4">
              "I highly recommend ETdu for anyone considering international education. Their expertise and professionalism are unmatched."
            </p>
            <p className="text-blue-500 font-bold">- Alex Johnson</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
