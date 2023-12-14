import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import cls from "./Select.stories.module.scss";
import { Select } from "./Select";
import { Country } from "@shared/consts/common";

const meta = {
  title: "shared/Select",
  component: Select,
  render: ({ ...args }) => (
    <div className={cls.wrapp}>
      <Select {...args} />
    </div>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
];
const value = Country.Armenia;

export const SelectNormal: Story = {
  args: {
    options,
    value,
  },
};

export const SelectDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
  args: {
    options,
    value,
  },
};

export const SelectWithLabelNormal: Story = {
  args: {
    label: "Test",
    options,
    value,
  },
};

export const SelectWithLabelDark: Story = {
  args: {
    label: "Test",
    options,
    value,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
