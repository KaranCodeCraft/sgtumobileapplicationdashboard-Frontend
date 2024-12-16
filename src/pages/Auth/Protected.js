import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const token = sessionStorage.getItem("token");

  return <Outlet />;
  if (token !== null) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default Protected;
