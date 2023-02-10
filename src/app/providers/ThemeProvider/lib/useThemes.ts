import { useCallback, useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemesResult {
  toggleTheme?: () => void;
  theme?: Theme;
  setTheme?: (theme?: Theme) => void;
}

export function useThemes(): UseThemesResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}
