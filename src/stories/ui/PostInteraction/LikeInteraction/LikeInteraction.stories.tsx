import type { Meta, StoryObj } from "@storybook/react";
import { LikeInteraction } from "./LikeInteraction";

const meta: Meta<typeof LikeInteraction> = {
  title: "Ui/LikeInteraction",
  component: LikeInteraction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LikeInteraction>;

export const StyledLikeInteraction: Story = {
  args: { postId: 1 },
};
