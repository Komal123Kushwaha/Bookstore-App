import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-full p-6 bg-white rounded-md shadow-md">
        
        {/* Close Button */}
        <div className="text-right">
              <Link to="/">
                <button className="text-sm bg-white text-black px-3 py-1 rounded-md hover:bg-blue-500">
                  X
                </button>
              </Link>
            </div>
        <h1 className="text-3xl font-bold underline text-center mb-4">About Us</h1>
        <p className="text-gray-700 text-xl mb-6">
          Welcome to our website! We are dedicated to providing top-notch services and valuable resources to our users. 
          Our mission is to empower individuals and businesses with the tools and knowledge they need to succeed.
        </p>
        <p className="text-gray-700 text-xl  mb-6">
          Founded in 2024, our team consists of passionate professionals committed to innovation, quality, and customer satisfaction. 
          We believe in fostering a community where ideas thrive, and collaboration leads to meaningful progress.
        </p>
        <p className="text-gray-700 text-xl mb-6 ">
          Thank you for visiting our website. 
          We look forward to being a part of your journey. If you have any questions or feedback, 
          feel free to reach out through our 
          
          
          <div className="mt-5 flex justify-center p-3">
          <Link to="/contact" 
          button className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">Contact Us
          </Link></div> 
        </p>
        <div className="text-center">
          <Link to="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 cursor-pointer">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
