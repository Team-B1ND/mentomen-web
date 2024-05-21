import type { Meta, StoryObj } from "@storybook/react";
import { ShowMoreContent } from "./ShowMoreContent";

const meta: Meta<typeof ShowMoreContent> = {
  title: "Ui/ShowMoreContent",
  component: ShowMoreContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ShowMoreContent>;

export const StyledShowMoreContent: Story = {
  args: { content: "안녕하세요", maxHeight: 88 },
};
