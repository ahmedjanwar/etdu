import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Subject */}
            <div className="mb-4 col-span-2">
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-400">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Message */}
            <div className="mb-4 col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-400">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="2"
                className="w-full px-4 py-2 rounded-md border border-gray-500 text-gray-500 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
