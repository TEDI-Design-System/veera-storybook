import { Meta, StoryObj } from '@storybook/html';
import { ProgressStoryProps, createProgress } from './progress';

const meta = {
  title: 'components/progress',
  tags: ['autodocs'],
  render: createProgress,
  argTypes: {
    value: { type: 'number', defaultValue: 30 },
    small: { type: 'boolean' },
  },
} satisfies Meta<ProgressStoryProps>;

export default meta;

type Story = StoryObj<ProgressStoryProps>;

export const Progress: Story = {};

export const Small: Story = {
  args: {
    small: true,
  },
};
