import type { StoryObj } from '@storybook/html';
import { SelectStoryProps, createSelect } from './select';
const meta = {
  title: 'forms/select',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<SelectStoryProps>;

export const Default: Story = {
  render: createSelect,
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
  args: {
    size: 'sm',
  },
};
