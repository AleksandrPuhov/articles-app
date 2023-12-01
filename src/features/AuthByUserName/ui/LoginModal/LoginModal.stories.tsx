import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { LoginModal } from "./LoginModal";
import { StoreDecorator } from "@shared/config/storybook/StoreDecorator";

const meta = {
  title: "features/LoginModal",
  component: LoginModal,
  args: {
    isOpened: true,
  },
  decorators: [
    StoreDecorator({
      login: { username: "test", password: "test" },
    }),
  ],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginModalNormal: Story = {};

export const LoginModalWithError: Story = {
  decorators: [
    StoreDecorator({
      login: { username: "test", password: "test", error: "Test error text" },
    }),
  ],
};

export const LoginModalWithLoading: Story = {
  decorators: [
    StoreDecorator({
      login: { username: "test", password: "test", isLoading: true },
    }),
  ],
};

export const LoginModalDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const LoginModalDarkWithError: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      login: { username: "test", password: "test", error: "Test error text" },
    }),
  ],
};

export const LoginModalDarkWithLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      login: { username: "test", password: "test", isLoading: true },
    }),
  ],
};
