import type { Meta, StoryObj } from '@storybook/html';
import { FormLayoutStoryProps, createFormLayout } from './form-layout';
const meta = {
  title: 'forms/form-layout',
  tags: ['autodocs'],
  render: createFormLayout,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<FormLayoutStoryProps>;

export default meta;

type Story = StoryObj<FormLayoutStoryProps>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    size: 'md',
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    size: 'md',
  },
};
