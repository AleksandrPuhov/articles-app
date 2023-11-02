import { Theme } from "@app/providers/ThemeProvider";
import { useMemo } from "react";

import { classNames } from "@shared/lib/classNames/classNames";
import { ThemeContext } from "@app/providers/ThemeProvider/lib/ThemeContext";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  const defaultProps = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      <div className={classNames(["app", theme])}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
