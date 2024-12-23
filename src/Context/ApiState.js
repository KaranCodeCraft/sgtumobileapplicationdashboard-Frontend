import React, { useState } from "react";
import ApiContext from "./ApiContext";

const ApiState = (props) => {
  // States
  const [token, setToken] = useState(localStorage.getItem("token") || null); 
  const url = "http://localhost:5000/";
  const [studentData, setStudentData] = useState()

  // Function to update the token (used after login)
  const setAuthToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  const fetchStudentData = async()=>{
    try {
        const response = await axios.post(`${apiBaseUrl}auth/login`, {
          email: validatedData.email,
          password: validatedData.password,
        });
   
        localStorage.setItem("token", response.data.token);
        navigate("/auth/dashboard");
      } catch (error) {
  
        if (error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      }
  }

  return (
    <ApiContext.Provider
      value={{
        apiBaseUrl: url,
        token,
        setAuthToken,
        studentData,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
