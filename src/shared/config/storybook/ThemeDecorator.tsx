import { Theme } from '@app/providers/ThemeProvider';
import { useMemo } from 'react';

import { classNames } from '@shared/lib/classNames/classNames';
import { ThemeContext } from '@app/providers/ThemeProvider/lib/ThemeContext';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  const defaultProps = useMemo(
    () => ({
      theme,
    }),
    [theme]
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      <div className={classNames(['app', theme])}>
        <StoryComponent />
      </div>
    </ThemeContext.Provider>
  );
};
