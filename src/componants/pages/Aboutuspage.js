import React from 'react';
import boos from '../Assests/boos1.jpg'

const AboutUsPage = () => {
  return (
    <div className="about-us-container bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <section className="hero-section text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about our journey, mission, and the team behind our success.
          </p>
        </section>

        {/* Company History */}
        <section className="history-section mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Journey</h2>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <p className="text-gray-700 text-lg mb-4">
              Founded in 2010, our company has been driven by innovation and a passion for creating outstanding products. Starting as a small startup, we have grown into an industry leader, serving thousands of customers worldwide.
            </p>
            <p className="text-gray-700 text-lg">
              Our commitment to quality and customer satisfaction has been the cornerstone of our success, and we continue to push boundaries to provide the best solutions in our field.
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mission-section mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Mission</h2>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-700 text-lg">
              Our mission is to innovate, inspire, and deliver exceptional experiences through our products and services. We aim to make a positive impact on the world by empowering businesses and individuals to reach their full potential.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src={boos}
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-500">CEO</p>
              <p className="text-gray-600 mt-2">
                Jane has over 20 years of experience leading innovative teams and driving business growth.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-500">CTO</p>
              <p className="text-gray-600 mt-2">
                John is a tech visionary with a passion for developing cutting-edge solutions.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Emily Taylor</h3>
              <p className="text-gray-500">COO</p>
              <p className="text-gray-600 mt-2">
                Emily is dedicated to streamlining operations and ensuring excellence in every department.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="value-item bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in doing the right thing, always. Integrity guides our decisions and actions.
              </p>
            </div>
            <div className="value-item bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We strive to lead the way with innovative ideas and groundbreaking solutions.
              </p>
            </div>
            <div className="value-item bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do, and we’re committed to their success.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
