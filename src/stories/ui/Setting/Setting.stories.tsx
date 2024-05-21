import type { Meta, StoryObj } from "@storybook/react";
import { Setting } from "./Setting";

const meta: Meta<typeof Setting> = {
  title: "Ui/Setting",
  component: Setting,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Setting>;

export const StyledSettingt: Story = {
  args: {},
};
