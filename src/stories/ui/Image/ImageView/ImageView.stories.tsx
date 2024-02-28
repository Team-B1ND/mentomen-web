import { Meta, StoryObj } from "@storybook/react";
import { ImageView } from "./ImageView";

const meta: Meta<typeof ImageView> = {
  title: "Ui/ImageView",
  component: ImageView,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageView>;

export const StyledImageView: Story = {
  args: {},
};
