import React from "react";

const About = () => {
  return (
    <div className=" p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700">
          Digital Guruji is your go-to resource for mental wellness in the digital
          age. Our mission is to empower individuals to manage stress through
          insightful content, practical tools, and supportive community
          engagement. We believe in fostering a balanced life by integrating
          technology with mindfulness. Join us on a journey toward a calmer,
          more focused mind!
        </p>
      </div>
      
      {/* Social Media Links */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Connect with Us:</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="#" target="_blank" className="text-blue-600 hover:text-blue-800">
              <i className="fa fa-facebook" aria-hidden="true"></i> Facebook
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="text-blue-400 hover:text-blue-600">
              <i className="fa fa-twitter" aria-hidden="true"></i> Twitter
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="text-pink-600 hover:text-pink-800">
              <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
            </a>
          </li>
          <li>
            <a href="#" target="_blank" className="text-blue-700 hover:text-blue-900">
              <i className="fa fa-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white mt-8 p-4 rounded-lg text-center">
        <p>&copy; {new Date().getFullYear()} Digital Guruji. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
