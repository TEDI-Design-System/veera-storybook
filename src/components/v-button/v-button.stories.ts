import type { Meta, StoryObj } from "@storybook/html";
import type { ButtonProps } from "./v-button";
import { createButton } from "./v-button";

const meta = {
  title: "components/v-button",
  tags: ["autodocs"],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "v-button",
  },
};
