import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { ProfilePage } from "./ProfilePage";
import { StoreDecorator } from "@shared/config/storybook/StoreDecorator";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageNormal: Story = {
  decorators: [StoreDecorator({})],
};

export const ProfilePageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};
