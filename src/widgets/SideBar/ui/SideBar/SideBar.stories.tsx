import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import SideBar from "./SideBar";
import { StoreDecorator } from "@shared/config/storybook/StoreDecorator";

const meta = {
  title: "widgets/SideBar",
  component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideBarNormal: Story = {
  decorators: [
    StoreDecorator({
      user: {},
    }),
  ],
};

export const SideBarDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {},
    }),
  ],
};

export const SideBarWithAuthNormal: Story = {
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

export const SideBarWithAuthDark: Story = {
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
