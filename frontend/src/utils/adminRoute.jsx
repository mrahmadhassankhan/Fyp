import React from "react";
import { Navigate } from "react-router-dom";

const adminRoute = ({ children }) => {
  const token = (localStorage.getItem("token") || "").trim();

  if (token === "") {
    return <Navigate to="/error" />;
  }
  return children;
};

export default adminRoute;
