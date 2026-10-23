import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import {
  nightTheme,
  ThemeMode,
} from "./theme";

interface ThemeContextType {
  mode: ThemeMode; 
  theme: typeof nightTheme;
}

const ThemeContext =
  createContext<ThemeContextType | null>(
    null
  );

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider
      value={{
        mode: "night",
        theme: nightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used inside ThemeProvider"
    );
  }

  return context;
}