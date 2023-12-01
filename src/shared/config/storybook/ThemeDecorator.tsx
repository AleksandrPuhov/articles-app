/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useMemo } from "react";

import { Theme } from "@app/providers/ThemeProvider";

import { classNames } from "@shared/lib/classNames/classNames";
import { ThemeContext } from "@app/providers/ThemeProvider/lib/ThemeContext";
import { StoryFn } from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (Story: StoryFn) => {
  const defaultProps = useMemo(() => {
    document.body.classList.remove(
      theme === Theme.NORMAL ? Theme.DARK : Theme.NORMAL
    );
    document.body.classList.add(theme);

    return {
      theme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      <div className={classNames(["app"])}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
