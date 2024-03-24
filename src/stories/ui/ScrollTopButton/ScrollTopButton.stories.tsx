import { Meta, StoryObj } from "@storybook/react";
import { ScrollTopButton } from "./ScrollTopButton";

const meta: Meta<typeof ScrollTopButton> = {
  title: "Ui/ScrollTopButton",
  component: ScrollTopButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollTopButton>;

export const StyledScrollTopButtont: Story = {
  args: {},
};
