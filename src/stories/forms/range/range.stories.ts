import type { Meta, StoryObj } from '@storybook/html';
import { RangeProps, createRangeSlider } from './range';

const meta = {
  title: 'forms/range',
  tags: ['autodocs'],
  render: createRangeSlider,
  argTypes: {
    disabled: { type: 'boolean' },
    min: { type: 'number' },
    max: { type: 'number' },
  },
} satisfies Meta<RangeProps>;

export default meta;

type Story = StoryObj<RangeProps>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    disabled: false,
  },
};
