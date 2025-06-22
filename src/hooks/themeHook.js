import { createContext, useEffect, useState, useContext } from "react";

const DARK_LOCAL_STORAGE_KEY = "dark";

export const ThemeContext = createContext({
  dark: true,
  toggle: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false); // light by default

  const toggleTheme = () => {
    localStorage.setItem(DARK_LOCAL_STORAGE_KEY, JSON.stringify(!dark));
    setDark(!dark);
    document.body.classList.toggle("dark", !dark);
    document.body.classList.toggle("light", dark);
  };

  useEffect(() => {
    const localeValue = JSON.parse(
      localStorage.getItem(DARK_LOCAL_STORAGE_KEY)
    );

    if (localeValue === null) {
      setDark(false);
      document.body.classList.add("light");
    } else {
      setDark(localeValue);
      document.body.classList.add(localeValue ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
