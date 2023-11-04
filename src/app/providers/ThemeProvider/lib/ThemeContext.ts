import { createContext } from "react";

export enum Theme {
  NORMAL = "normal-theme",
  DARK = "dark-theme",
}
export interface IThemeContext {
  theme?: Theme;
  setTheme?: (theme?: Theme) => void;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
