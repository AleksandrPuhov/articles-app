import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import ThemeSwitcher from "./ThemeSwitcher";

const meta = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherNormal: Story = {};

export const ThemeSwitcherDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
