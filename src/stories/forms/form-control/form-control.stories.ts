import type { StoryObj } from '@storybook/html';
import {
  FormControlStoryProps,
  IconInputProps,
  createIconInput,
  createInputControl,
  createSelectControlStory,
  createTextAreaControl,
} from './form-control';

const meta = {
  title: 'forms/form-control',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { type: 'boolean' },
    status: {
      control: { type: 'select' },
      options: ['success', 'error', null],
    },
  },
  args: {
    placeholder: 'Placeholder',
    size: 'md',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<FormControlStoryProps>;

export const Input: Story = {
  render: createInputControl,
};

export const TextArea: Story = {
  render: createTextAreaControl,
};

export const Select: Story = {
  render: createSelectControlStory,
};

export const IconInput: StoryObj<IconInputProps> = {
  args: {
    placeholder: 'Placeholder',
    size: 'md',
    disabled: false,
    leftIcon: 'search',
    rightIcon: '',
  },
  render: createIconInput,
};
