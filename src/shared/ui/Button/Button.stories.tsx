import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import ArrowRight from "@shared/assets/icons/arrow-right.svg";
import LightIcon from "@shared/assets/icons/icon-sun.svg";

import cls from "./Button.stories.module.scss";

import Button, { ButtonIconSize, ButtonVariant } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  args: {
    children: "Test",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Clear: Story = {
  args: {
    variant: ButtonVariant.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    variant: ButtonVariant.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
  },
};

export const OutlineDisabled: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
    disabled: true,
  },
};

export const OutlineDark: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OutlineDisabledDark: Story = {
  args: {
    variant: ButtonVariant.OUTLINE,
    disabled: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IconSizeM: Story = {
  args: {
    children: <ArrowRight className={cls.arrow} />,
    variant: ButtonVariant.ICON,
    iconSize: ButtonIconSize.M,
  },
};

export const IconSizeMDark: Story = {
  args: {
    children: <ArrowRight className={cls.arrow} />,
    variant: ButtonVariant.ICON,
    iconSize: ButtonIconSize.M,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IconSizeL: Story = {
  args: {
    children: <LightIcon className={cls.icon} />,
    variant: ButtonVariant.ICON,
    iconSize: ButtonIconSize.L,
  },
};

export const IconSizeLDark: Story = {
  args: {
    children: <LightIcon className={cls.icon} />,
    variant: ButtonVariant.ICON,
    iconSize: ButtonIconSize.L,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
