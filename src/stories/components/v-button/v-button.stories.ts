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
      options: ['primary', 'secondary', 'tertiary', 'success', 'error'],
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
    label: 'v-button',
  },
};
