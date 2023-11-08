import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import Input from "./Input";
import cls from "./Input.stories.module.scss";

const meta = {
  title: "shared/Input",
  component: Input,
  render: ({ ...args }) => (
    <div className={cls.wrapp}>
      <Input {...args} />
    </div>
  ),
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputNormal: Story = {};

export const InputDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const InputWithLabelNormal: Story = {
  args: {
    label: "Test",
  },
};

export const InputWithLabelDark: Story = {
  args: {
    label: "Test",
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
