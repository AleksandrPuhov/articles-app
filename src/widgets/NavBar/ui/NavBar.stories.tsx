import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import NavBar from "./NavBar";

const meta = {
  title: "widgets/NavBar",
  component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarNormal: Story = {};

export const NavBarDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
