import { Preview } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { I18NextDecorator } from "@shared/config/storybook/I18NextDecorator";
import { RouterDecorator } from "@shared/config/storybook/RouterDecorator";
import { StyleDecorator } from "@shared/config/storybook/StyleDecorator";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    RouterDecorator,
    I18NextDecorator,
    ThemeDecorator(Theme.NORMAL),
    StyleDecorator,
  ],
};

export default preview;
