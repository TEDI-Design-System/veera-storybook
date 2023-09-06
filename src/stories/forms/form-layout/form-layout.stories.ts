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
  },
} satisfies Meta<FormLayoutStoryProps>;

export default meta;

type Story = StoryObj<FormLayoutStoryProps>;

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    width: 877,
    labelWidth: 362,
    gap: 24,
  },
};

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    width: 877,
    labelWidth: 362,
    gap: 24,
  },
};
