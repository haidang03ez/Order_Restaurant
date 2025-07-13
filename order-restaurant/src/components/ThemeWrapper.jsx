import React from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div
      className={`
        transition-colors duration-300
        ${
          theme === "light"
            ? "bg-white text-gray-900"
            : "bg-gray-900 text-white"
        }
      `}
    >
      {children}
    </div>
  );
};
