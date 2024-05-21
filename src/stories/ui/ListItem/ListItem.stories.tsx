import type { Meta, StoryObj } from "@storybook/react";
import { ListItem } from "./ListItem";

const meta: Meta<typeof ListItem> = {
  title: "Ui/ListItem",
  component: ListItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const StyledListItem: Story = {
  args: {
    data: {
      author: 0,
      content: "ListItem",
      createDateTime: "2024-02-28T10:18:47.755Z",
      imgUrls: [""],
      postId: 1,
      profileUrl: "",
      stdInfo: { grade: 2, number: 8, room: 4 },
      tag: "WEB",
      updateDateTime: "2024-02-28T10:18:47.755Z",
      updateStatus: "UPDATE",
      userName: "박상현",
    },
  },
};
