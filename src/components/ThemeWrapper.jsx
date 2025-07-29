import React, { forwardRef } from "react";
import { useTheme } from "../hooks/useTheme";

export const ThemeWrapper = forwardRef(({ children, className = "" }, ref) => {
  const { theme } = useTheme();

  const baseThemeClass = `
    transition-colors duration-300
    ${theme === "light" ? "" : "bg-gray-700 text-white"}
  `;
  return (
    <div ref={ref} className={`${baseThemeClass} ${className}`}>
      {children}
    </div>
  );
});
