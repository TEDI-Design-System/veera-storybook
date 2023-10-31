import type { Meta, StoryObj } from '@storybook/html';
import { CardProps, createCardStory } from './card';

const meta = {
  title: 'components/card',
  tags: ['autodocs'],
  render: createCardStory,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
} satisfies Meta<CardProps>;

export default meta;

type Story = StoryObj<CardProps>;

export const Card: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    flat: false,
  },
};
