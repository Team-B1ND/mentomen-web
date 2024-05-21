import type { Meta, StoryObj } from "@storybook/react";
import { CommentInteraction } from "./CommentInteraction";

const meta: Meta<typeof CommentInteraction> = {
  title: "Ui/CommentInteraction",
  component: CommentInteraction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CommentInteraction>;

export const StyledCommentInteraction: Story = {
  args: { postId: 1 },
};
