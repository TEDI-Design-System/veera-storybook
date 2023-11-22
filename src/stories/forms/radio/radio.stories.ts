import type { Meta, StoryObj } from '@storybook/html';
import { RadioProps, createRadios, createRadiosWithoutLabels } from './radio';

const items = [
  { value: 'radio1', label: 'Radio 1' },
  { value: 'radio2', label: 'Radio 2' },
  { value: 'radio3', label: 'Radio 3', disabled: true },
  { value: 'radio4', label: 'Radio error', error: true },
  { value: 'radio5', label: 'Radio success', success: true },
];

const meta = {
  title: 'forms/radio',
  tags: ['autodocs'],
  render: createRadios,
} satisfies Meta<RadioProps>;

export default meta;

type Story = StoryObj<RadioProps>;

export const Default: Story = {
  args: {
    size: 'md',
    items,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Horizontal: Story = {
  render: createRadios,
  args: {
    size: 'md',
    items,
    horizontal: true,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const WithoutLabel = {
  render: createRadiosWithoutLabels,
};
