import React from 'react';

const ServicesSection = () => {
  return (
    <section className="services bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Essential Admission</h3>
            <p className="text-gray-700 mb-4">
              Assistance with university and program selection, application guidance, and support with documentation.
            </p>
            <button className="text-blue-500 hover:underline">Learn More</button>
          </div>

          {/* Service Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Comprehensive Admission</h3>
            <p className="text-gray-700 mb-4">
              In-depth counseling sessions, assistance with crafting a compelling personal statement, and visa application support.
            </p>
            <button className="text-blue-500 hover:underline">Learn More</button>
          </div>

          {/* Service Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Premium Education Experience</h3>
            <p className="text-gray-700 mb-4">
              All-inclusive package with interview preparation, language proficiency assessment, and additional post-graduation services.
            </p>
            <button className="text-blue-500 hover:underline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
