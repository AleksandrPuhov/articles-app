import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import cls from "./ValidationErrorText.stories.module.scss";

import { ValidationErrorText } from "./ValidationErrorText";
import Button, { ButtonVariant } from "../Button/Button";

const meta = {
  title: "shared/ValidationErrorText",
  component: ValidationErrorText,
  args: {
    validationText: "Test text error",
    onTop: false,
  },
  render: ({ ...args }) => (
    <div className={cls.wrapp}>
      <div className={cls.wrappBtn}>
        <Button variant={ButtonVariant.OUTLINE}>{"Test"}</Button>
        <ValidationErrorText {...args} />
      </div>
    </div>
  ),
} satisfies Meta<typeof ValidationErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorTextNormal: Story = {};

export const ErrorTextDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorTextOnTopNormal: Story = {
  args: {
    onTop: true,
  },
};

export const ErrorTextOnTopDark: Story = {
  args: {
    onTop: true,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
