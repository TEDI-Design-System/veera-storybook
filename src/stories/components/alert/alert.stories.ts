import type { Meta, StoryObj } from '@storybook/html';
import { AlertStoryProps, createAlert } from './alert';

const meta = {
  title: 'components/alert',
  tags: ['autodocs'],
  render: createAlert,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
    },
    hasIcon: { type: 'boolean' },
  },
  args: {
    closable: true,
    headerless: false,
  },
} satisfies Meta<AlertStoryProps>;

export default meta;

type Story = StoryObj<AlertStoryProps>;

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
  },
};

export const WithIcon: Story = {
  args: {
    hasIcon: true,
  },
};

export const Global: Story = {
  args: {
    global: true,
  },
};

export const Floating: Story = {
  args: {
    floating: true,
  },
};
