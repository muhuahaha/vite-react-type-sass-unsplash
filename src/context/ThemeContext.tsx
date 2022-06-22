import { createContext, useState, useMemo } from 'react';

export type Theme = 'light' | 'dark';
export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext({
  theme: 'light',
  undefined,
});

type ThemeProviderProps = {
  children: React.ReactNode;
};
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider
      value={useMemo(() => ({ theme, setTheme }), [theme, setTheme])}
    >
      {children}
    </ThemeContext.Provider>
  );
};
