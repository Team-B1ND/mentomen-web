import type { Meta, StoryObj } from "@storybook/react";
import { PageProgressBar } from "./PageProgressBar";

const meta: Meta<typeof PageProgressBar> = {
  title: "Ui/PageProgressBar",
  component: PageProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageProgressBar>;

export const StyledPageProgressBar: Story = {
  args: {},
};
