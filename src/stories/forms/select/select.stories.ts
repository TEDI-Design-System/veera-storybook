import type { StoryObj } from '@storybook/html';
import { SelectStoryProps, createMultiselect, createSelectStory } from './select';
const meta = {
  title: 'forms/select',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
  args: {
    size: 'md',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<SelectStoryProps>;

export const Default: Story = {
  render: createSelectStory,
};

export const Multiselect: Story = {
  render: createMultiselect,
};
