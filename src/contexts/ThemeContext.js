import React from "react";

// Define themes and styles
export const themes = {
  light: {
    background: "#FFFFFF",
    btnVariant: "outline",
    particlesColor: "#718096",
  },
  dark: {
    background: "#2D3748",
    color: "white",
    btnVariant: "solid",
    particlesColor: "#FFFFFF",
  },
};

// Create context for theme
export const ThemeContext = React.createContext(themes.light);
