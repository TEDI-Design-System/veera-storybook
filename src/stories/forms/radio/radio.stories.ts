import type { Meta, StoryObj } from '@storybook/html';
import { RadioProps, createRadio } from './radio';

const meta = {
  title: 'forms/radio',
  tags: ['autodocs'],
  render: createRadio,
  argTypes: {},
} satisfies Meta<RadioProps>;

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    items: [
      { value: 'radio1', label: 'Radio 1' },
      { value: 'radio2', label: 'Radio 2' },
      { value: 'radio3', label: 'Radio 3', disabled: true },
    ],
  },
};
