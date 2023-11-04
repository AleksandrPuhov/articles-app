import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "@app/providers/ThemeProvider";
import { ThemeDecorator } from "@shared/config/storybook/ThemeDecorator";

import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  args: {
    children: "Test",
    isOpened: true,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalNormal: Story = {};

export const ModalDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
