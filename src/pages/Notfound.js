import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const NotFound = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const goBackToHome = () => {
    if(localStorage.getItem('token')){
      return navigate("/dashboard"); 
    } 
    return navigate("/"); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mt-2">
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={goBackToHome}
        className="flex items-center mt-6 text-blue-500 hover:text-blue-700"
      >
        <FaHome className="mr-2" />
        Go back to Home
      </button>
    </div>
  );
};

export default NotFound;
