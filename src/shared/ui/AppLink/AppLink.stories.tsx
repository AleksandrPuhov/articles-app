import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import AppLink, { AppLinkVariant } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
    children: "Test",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    variant: AppLinkVariant.SECONDARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    variant: AppLinkVariant.PRIMARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    variant: AppLinkVariant.SECONDARY,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
