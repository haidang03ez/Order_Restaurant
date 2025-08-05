import React from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  if (loading) return <div>Đang xác thực phiên đăng nhập...</div>;

  if (!user) return <Navigate to="/sign-in" replace />;

  return children;
};
