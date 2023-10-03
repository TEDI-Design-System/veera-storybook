import type { Meta, StoryObj } from '@storybook/html';
import { BadgeStoryProps, createBadge } from './badge';

const meta = {
  title: 'components/badge',
  tags: ['autodocs'],
  render: createBadge,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error', 'neutral'],
    },
    hasIcon: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<BadgeStoryProps>;

export default meta;

type Story = StoryObj<BadgeStoryProps>;

export const Info: Story = {
  args: {
    variant: 'info',
    hasIcon: true,
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    hasIcon: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    hasIcon: true,
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    hasIcon: true,
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    hasIcon: true,
  },
};
