import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { LoginModal } from "./LoginModal";
import { StoreDecorator } from "@shared/config/storybook/StoreDecorator";
import { loginReducer } from "@features/AuthByUserName/model/slice/loginSlice";

const meta = {
  title: "features/LoginModal",
  component: LoginModal,
  args: {
    isOpened: true,
  },
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginModalNormal: Story = {
  decorators: [
    StoreDecorator(
      {
        login: { username: "test", password: "test" },
      },
      {
        login: loginReducer,
      }
    ),
  ],
};

export const LoginModalWithError: Story = {
  decorators: [
    StoreDecorator(
      {
        login: { username: "test", password: "test", error: "loginError" },
      },
      {
        login: loginReducer,
      }
    ),
  ],
};

export const LoginModalWithLoading: Story = {
  decorators: [
    StoreDecorator(
      {
        login: { username: "test", password: "test", isLoading: true },
      },
      {
        login: loginReducer,
      }
    ),
  ],
};

export const LoginModalDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
      {
        login: { username: "test", password: "test" },
      },
      {
        login: loginReducer,
      }
    ),
  ],
};

export const LoginModalDarkWithError: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
      {
        login: { username: "test", password: "test", error: "Test error text" },
      },
      {
        login: loginReducer,
      }
    ),
  ],
};

export const LoginModalDarkWithLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
      {
        login: { username: "test", password: "test", isLoading: true },
      },
      {
        login: loginReducer,
      }
    ),
  ],
};
