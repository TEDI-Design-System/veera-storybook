import type { Meta, StoryObj } from "@storybook/html";
// import type { ButtonProps } from "./v-button";
// import { createButton } from "./v-button";

const meta = {
  title: "utilities/colors",
  tags: ["autodocs"],
  render: () => {
    return `<div></div>`;
  },
  argTypes: {},
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {},
};
