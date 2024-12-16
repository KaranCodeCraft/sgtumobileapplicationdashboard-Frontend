import React from 'react';

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white relative">
      <a href="/login" className="absolute top-4 right-4 bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300">
        Login
      </a>
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg mb-8">Your journey to excellence starts here.</p>
      <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300">
        Get Started
      </button>
    </div>
  );
}

export default Landing;