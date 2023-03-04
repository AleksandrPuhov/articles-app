import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageError from './PageError';

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => (
  <PageError {...args} />
);

export const PageErrorNormal = Template.bind({});

export const PageErrorDark = Template.bind({});
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
