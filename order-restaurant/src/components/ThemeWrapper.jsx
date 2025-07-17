import React from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeWrapper = ({ children, className = "" }) => {
  const { theme } = useTheme();
  const baseThemeClass = `
    transition-colors duration-300
    ${theme === "light" ? "" : "bg-gray-700 text-white"}
  `;
  return <div className={`${baseThemeClass} ${className}`}>{children}</div>;
};
