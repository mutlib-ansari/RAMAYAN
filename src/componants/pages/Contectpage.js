import React, { useState } from 'react';
import bg from '../Assests/bgimage.png'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (send the form data)
    console.log('Form Data Submitted:', formData);
    alert("Message sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    
    <div style={{ backgroundImage: `url(${bg})` }} className=" bg-cover contact-container bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        
        {/* Contact Form */}
        <div className="contact-form bg-transparent shadow-lg rounded-lg p-8 mb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                rows="5" 
                required
              ></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Our Office</h3>
            <p>123 Contact Street</p>
            <p>City, Country</p>
            <p>Email: contact@company.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Embedded Map */}
          <div className="map-container">
            <iframe 
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509105!2d144.9537353153163!3d-37.81720997975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b9de50c9d345!2sGoogle!5e0!3m2!1sen!2sus!4v1614643939416!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
