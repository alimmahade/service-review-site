import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ContextApi } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ContextApi);
  const location = useLocation();

  if (loading) {
    return <h1 className="text-2xl">Loading.....</h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
