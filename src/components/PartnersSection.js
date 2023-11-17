import React from 'react';

const PartnersSection = () => {
  const partners = [
    'Company A',
    'Company B',
    'Company C',
    'Company D',
    
  ];

  return (
    <section className="partners bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Partners</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-md shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{partner}</h3>
              {/* You can add additional details or links here if needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
