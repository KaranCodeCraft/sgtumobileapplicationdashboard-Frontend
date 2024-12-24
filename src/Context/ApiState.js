import React, { useState, useEffect } from "react";
import ApiContext from "./ApiContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApiState = (props) => {

  const navigate = useNavigate();
  // States
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const url = "http://localhost:5000/";
  const [studentData, setStudentData] = useState({
    name: "John Doe",
    enrollmentNumber: "2024001",
    aadharNumber: "1234 5678 9012",
    mobileNumber: "9876543210",
    email: "john.doe@email.com",
    session: "2024",
    course: "B.Tech",
    stream: "CSE",
   });

  // Function to update the token (used after login)
  const setAuthToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Function for logout
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    navigate("/login");
  };


  // Function to fetch student data from the server
  const fetchStudentData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(`${url}student/all`, config);
      console.log(response.data);
      setStudentData(response.data.data);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data.message);
      } else {
        console.error("Error:", error.message);
      }
    }
  };


  const fetchData = () => {
    fetchStudentData();
  };

  useEffect(() => {
    if (token) {
      fetchData();
      const intervalId = setInterval(() => {
        fetchData(); 
      }, 25000);
      return () => clearInterval(intervalId); 
    }
  }, [token]);

  return (
    <ApiContext.Provider
      value={{
        apiBaseUrl: url,
        token,
        setAuthToken,
        studentData,
        setToken,
        fetchStudentData,
        logout,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
