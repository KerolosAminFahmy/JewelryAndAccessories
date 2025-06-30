import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  direction: string;
  setDirection: (dir: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { i18n } = useTranslation();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  
  const [direction, setDirection] = useState(() => {
    const savedDirection = localStorage.getItem('direction');
    return savedDirection || (i18n.language === 'ar' ? 'rtl' : 'ltr');
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleDirectionChange = (newDirection: string) => {
    setDirection(newDirection);
    localStorage.setItem('direction', newDirection);
  };

  // Update direction when language changes
  useEffect(() => {
    const newDirection = i18n.language === 'ar' ? 'rtl' : 'ltr';
    handleDirectionChange(newDirection);
  }, [i18n.language]);

  // Apply theme and direction to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('dir', direction);
    document.body.className = `${theme} ${direction}`;
  }, [theme, direction]);

  const value = {
    theme,
    toggleTheme,
    direction,
    setDirection: handleDirectionChange
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 