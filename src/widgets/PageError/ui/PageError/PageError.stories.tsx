import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import PageError from "./PageError";

const meta = {
  title: "widgets/PageError",
  component: PageError,
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageErrorNormal: Story = {};

export const PageErrorDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
