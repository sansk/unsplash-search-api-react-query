import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const isDarkThemeDef = () => {
  if (localStorage.getItem("darkThemeOption")) {
    return localStorage.getItem("darkThemeOption") === "true" ? true : false;
  }
  return window.matchMedia("(prefers-color-scheme:dark)").matches;
};

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeDef());
  const [searchVal, setSearchVal] = useState("nature");

  const toggleDarkTheme = () => {
    const newVal = !isDarkTheme;
    setIsDarkTheme(newVal);

    document.body.classList.toggle("dark-theme", newVal);
    localStorage.setItem("darkThemeOption", newVal);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkThemeDef());
  }, []);

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchVal, setSearchVal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
