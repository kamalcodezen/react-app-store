import { createContext } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  themeToggle: () => void;
}



export const ThemeContext = createContext<ThemeContextType | null>(null);
