import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import NavBar from "./NavBar";
import { StoreDecorator } from "@shared/config/storybook/StoreDecorator";

const meta = {
  title: "widgets/NavBar",
  component: NavBar,
  decorators: [
    StoreDecorator({
      user: undefined,
    }),
  ],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavBarNormal: Story = {};

export const NavBarNormalWithAuth: Story = {
  decorators: [
    StoreDecorator({
      user: {
        authData: {
          id: 1,
          username: "Test Name",
        },
      },
    }),
  ],
};

export const NavBarDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const NavBarDarkWithAuth: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {
          id: 1,
          username: "Test Name",
        },
      },
    }),
  ],
};
