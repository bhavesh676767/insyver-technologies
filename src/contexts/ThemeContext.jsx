import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Apply theme to document with smooth transition
  const applyTheme = useCallback((themeValue) => {
    try {
      const root = document.documentElement;
      // Remove previous theme classes
      root.classList.remove('dark', 'light');
      // Add new theme class
      root.classList.add(themeValue);
      // Save to localStorage
      localStorage.setItem('theme', themeValue);
      // Update data attribute for easier CSS targeting
      root.setAttribute('data-theme', themeValue);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }, []);

  // Initialize theme on mount
  useEffect(() => {
    try {
      // Prevent flash of unstyled content by applying theme immediately
      const savedTheme = localStorage.getItem('theme');
      let initialTheme = 'light';

      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        initialTheme = savedTheme;
      } else {
        // Check system preference
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        initialTheme = systemPrefersDark ? 'dark' : 'light';
      }

      // Apply immediately
      applyTheme(initialTheme);
      setTheme(initialTheme);
      setMounted(true);
    } catch (error) {
      console.error('Error initializing theme:', error);
      setMounted(true);
    }
  }, [applyTheme]);

  // Update when theme state changes
  useEffect(() => {
    if (mounted) {
      applyTheme(theme);
    }
  }, [theme, mounted, applyTheme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if user hasn't explicitly set a theme
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return newTheme;
    });
  }, []);

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
