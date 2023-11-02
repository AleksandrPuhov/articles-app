import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { MainPage } from "./MainPage";

const meta = {
  title: "pages/MainPage",
  component: MainPage,
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainPageNormal: Story = {};

export const MainPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
