"use client";
import React, { createContext, useState } from "react";

const defaultContext = {
  toggleTheme: () => {},
  isDark: true,
};

const ThemeContext = createContext(defaultContext);

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  const context = {
    toggleTheme,
    isDark,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
