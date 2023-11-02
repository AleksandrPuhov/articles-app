import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import LangSwitcher from "./LangSwitcher";

const meta = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LangSwitcherNormal: Story = {};

export const LangSwitcherDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
