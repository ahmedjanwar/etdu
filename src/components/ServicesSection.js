import React from 'react';

const ServicesSection = () => {
  const packages = [
    {
      title: 'Standard Package',
      benefits: [
        'Personalized Consultation',
        'Assistance with Application Process',
        'Visa Guidance',
        'Pre-departure Orientation',
      ],
    },
    {
      title: 'Premium Package',
      benefits: [
        'All Standard Package Features',
        'Accommodation Assistance',
        'Language Proficiency Support',
        'Cultural Integration Sessions',
      ],
      isPremium: true, // Flag to identify the Premium Package
    },
    {
      title: 'Platinum Package',
      benefits: [
        'All Premium Package Features',
        'Airport Pickup and Transfer',
        'Exclusive Networking Events',
        'Career Counseling',
      ],
    },
  ];

  return (
    <section className="services bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((packageItem, index) => (
            <div
              key={index}
              className={`bg-white rounded-md shadow-md p-6 ${
                packageItem.isPremium ? 'border-2 border-yellow-500' : ''
              }`}
            >
              <h3 className="text-xl font-bold mb-4">{packageItem.title}</h3>
              <ul className="list-none text-gray-700">
                {packageItem.benefits.map((benefit, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <span className="mr-2 text-green-500">&#10004;</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 focus:outline-none">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
