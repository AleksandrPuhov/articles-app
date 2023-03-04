import { addDecorator } from '@storybook/react';

import { StyleDecorator } from '@shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { Theme } from '@app/providers/ThemeProvider';
import { I18NextDecorator } from '@shared/config/storybook/I18NextDecorator';
import { RouterDecorator } from '@shared/config/storybook/RouterDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.NORMAL));
addDecorator(I18NextDecorator);
addDecorator(RouterDecorator);
