import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import SideBar from "./SideBar";

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBarNormal: Story = {};

export const SideBarDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
