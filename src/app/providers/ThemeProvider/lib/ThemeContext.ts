import { Dispatch, SetStateAction, createContext } from "react";

export enum Theme {
  NORMAL = "normal-theme",
  DARK = "dark-theme",
}
export interface IThemeContext {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
