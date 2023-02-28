import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button, { ButtonVariant } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Test',
  variant: ButtonVariant.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Test',
  variant: ButtonVariant.OUTLINE,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Test',
  variant: ButtonVariant.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Test',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
