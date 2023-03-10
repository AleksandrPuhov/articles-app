import { Theme } from '@app/providers/ThemeProvider';
import { ThemeDecorator } from '@shared/config/storybook/ThemeDecorator';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArrowRight from '@shared/assets/icons/arrow-right.svg';
import LightIcon from '@shared/assets/icons/icon-sun.svg';

import cls from './Button.stories.module.scss';

import Button, { ButtonIconSize, ButtonVariant } from './Button';

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

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Test',
  variant: ButtonVariant.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Test',
  variant: ButtonVariant.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Test',
  variant: ButtonVariant.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const IconSizeM = Template.bind({});
IconSizeM.args = {
  children: <ArrowRight className={cls.arrow} />,
  variant: ButtonVariant.ICON,
  iconSize: ButtonIconSize.M,
};

export const IconSizeMDark = Template.bind({});
IconSizeMDark.args = {
  children: <ArrowRight className={cls.arrow} />,
  variant: ButtonVariant.ICON,
  iconSize: ButtonIconSize.M,
};
IconSizeMDark.decorators = [ThemeDecorator(Theme.DARK)];

export const IconSizeL = Template.bind({});
IconSizeL.args = {
  children: <LightIcon className={cls.icon} />,
  variant: ButtonVariant.ICON,
  iconSize: ButtonIconSize.L,
};

export const IconSizeLDark = Template.bind({});
IconSizeLDark.args = {
  children: <LightIcon className={cls.icon} />,
  variant: ButtonVariant.ICON,
  iconSize: ButtonIconSize.L,
};
IconSizeLDark.decorators = [ThemeDecorator(Theme.DARK)];
