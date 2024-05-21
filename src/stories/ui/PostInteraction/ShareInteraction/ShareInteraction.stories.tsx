import type { Meta, StoryObj } from "@storybook/react";
import { ShareInteraction } from "./ShareInteraction";

const meta: Meta<typeof ShareInteraction> = {
  title: "Ui/ShareInteraction",
  component: ShareInteraction,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ShareInteraction>;

export const StyledShareInteraction: Story = {
  args: { postId: 1 },
};
