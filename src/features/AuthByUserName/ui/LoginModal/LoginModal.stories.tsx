import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { LoginModal } from "./LoginModal";

const meta = {
  title: "features/LoginModal",
  component: LoginModal,
  args: {
    isOpened: true,
  },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginModalNormal: Story = {};

export const LoginModalDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
