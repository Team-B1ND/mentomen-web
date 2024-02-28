import { Meta, StoryObj } from "@storybook/react";
import { ReadMoreImage } from "./ReadMoreImage";

const meta: Meta<typeof ReadMoreImage> = {
  title: "Ui/ReadMoreImage",
  component: ReadMoreImage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ReadMoreImage>;

export const StyledReadMoreImage: Story = {
  args: {},
};
