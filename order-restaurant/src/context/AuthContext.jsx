import React, { createContext, useEffect, useState } from "react";
import { getUserDetails } from "../services/userService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const restoreSession = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
  
      if (!accessToken) return;
  
      try {
        const res = await getUserDetails();
        setUser({ ...res.data, accessToken, refreshToken });
      } catch (err) {
        console.warn("Không thể khôi phục phiên đăng nhập:", err.message);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    };
  
    restoreSession();
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("accessToken", userData.accessToken);
    if (userData.refreshToken) {
      localStorage.setItem("refreshToken", userData.refreshToken);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
