import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { ProfilePage } from "./ProfilePage";
import { StoreDecorator } from "@shared/config/storybook/StoreDecorator";
// import { profileReducer } from "@entities/Profile";
import { Country, Currency } from "@shared/consts/common";
import { profileReducer } from "@entities/Profile";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageNormal: Story = {
  decorators: [
    StoreDecorator(
      {
        profile: {
          data: {
            first: "Алекс",
            lastname: "Тест",
            age: 33,
            currency: Currency.RUB,
            country: Country.Russia,
            city: "Moscow",
            username: "admin",
            avatar:
              "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
          },
          isLoading: false,
          readonly: false,
        },
      },
      {
        profile: profileReducer,
      }
    ),
  ],
};

export const ProfilePageDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
      {
        profile: {
          data: {
            first: "Алекс",
            lastname: "Тест",
            age: 33,
            currency: Currency.RUB,
            country: Country.Russia,
            city: "Moscow",
            username: "admin",
            avatar:
              "https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg",
          },
          isLoading: false,
          readonly: false,
        },
      },
      {
        profile: profileReducer,
      }
    ),
  ],
};
