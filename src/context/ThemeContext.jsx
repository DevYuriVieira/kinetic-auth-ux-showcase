import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className={dark ? "dark" : "light"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);