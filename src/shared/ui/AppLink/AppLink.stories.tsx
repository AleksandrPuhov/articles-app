import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AppLink, { AppLinkVariant } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Test',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Test',
  variant: AppLinkVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Test',
  variant: AppLinkVariant.SECONDARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Test',
  variant: AppLinkVariant.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'Test',
  variant: AppLinkVariant.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
