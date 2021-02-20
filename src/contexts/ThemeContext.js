import React from "react";

// Define themes and styles
export const themes = {
  light: {
    background: "white",
    btnVariant: "outline",
  },
  dark: {
    background: "gray.700",
    color: "white",
    btnVariant: "solid",
  },
};

// Create context for theme
export const ThemeContext = React.createContext(themes.light);
