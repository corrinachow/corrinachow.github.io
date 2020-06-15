import React, { useState, createContext } from "react";

export interface ThemeContextProps {
  themeType: Theme;
  setTheme: Function;
}

export enum Theme {
  Light = "light",
  Dark = "dark"
}
const defaultState = {
  themeType: Theme.Light
};

export const ThemeContext = createContext<Partial<ThemeContextProps>>(
  defaultState
);

export const ThemeProvider = ({ children }): any => {
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ themeType: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
