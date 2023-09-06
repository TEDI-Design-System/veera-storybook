import type { Meta, StoryObj } from '@storybook/html';
import type { ButtonProps } from './v-button';
import { createButton } from './v-button';

const meta = {
  title: 'components/v-button',
  tags: ['autodocs'],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'neutral', 'success', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { type: 'boolean' },
  },
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    label: 'Neutral',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    label: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    label: 'Danger',
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    variant: 'primary',
    size: 'lg',
    label: 'forest',
  },
};
