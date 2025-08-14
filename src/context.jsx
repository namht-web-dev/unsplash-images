import { createContext, useContext, useEffect, useState } from "react";

const getInitialDarkMode = () => {
  const preferColor = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedColor = localStorage.getItem("darkTheme");
  if (storedColor === null) return preferColor;
  return storedColor === "true";
};

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkTheme);
  }, [darkTheme]);
  const toggleDarkTheme = () => {
    const newColorTheme = !darkTheme;
    setDarkTheme(newColorTheme);
    localStorage.setItem("darkTheme", newColorTheme);
  };

  return (
    <AppContext.Provider
      value={{ darkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
