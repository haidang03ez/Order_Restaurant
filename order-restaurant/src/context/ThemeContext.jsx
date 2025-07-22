import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("system");

  const applyTheme = (themeValue) => {
    let finalTheme = themeValue;

    if (themeValue === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      finalTheme = prefersDark ? "dark" : "light";
    }

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(finalTheme);
  };

  useEffect(() => {
    const stored = localStorage.getItem("themeConfig");
    const savedTheme = stored || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("themeConfig", theme);
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
