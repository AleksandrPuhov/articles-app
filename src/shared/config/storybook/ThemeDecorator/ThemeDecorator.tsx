import { Theme } from '@app/providers/ThemeProvider';
import { classNames } from '@shared/lib/classNames/classNames';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    // <div className={`app ${theme}`}>
    <div className={classNames(['app', theme])}>
      <StoryComponent />
    </div>
  );
