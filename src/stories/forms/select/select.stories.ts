import type { StoryObj } from '@storybook/html';
import { SelectStoryProps, createMultiselect, createSelect } from './select';
const meta = {
  title: 'forms/select',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
  args: {
    size: 'sm',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<SelectStoryProps>;

export const Default: Story = {
  render: createSelect,
};

export const Multiselect: Story = {
  render: createMultiselect,
};
