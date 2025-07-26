import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { user, loading  } = useAuth();

  if (loading) return <div>Đang xác thực phiên đăng nhập...</div>;

  if (!user) return <Navigate to="/sign-in" replace />;

  return children;
};