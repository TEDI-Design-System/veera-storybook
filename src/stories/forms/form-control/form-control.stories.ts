import type { StoryObj } from '@storybook/html';
import {
  FormControlStoryProps,
  InputGroupProps,
  createInputControl,
  createInputGroup,
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

type Story<T> = StoryObj<T>;

export const Input: Story<FormControlStoryProps> = {
  render: createInputControl,
};

export const TextArea: Story<FormControlStoryProps> = {
  render: createTextAreaControl,
};

export const InputGroup: Story<InputGroupProps> = {
  render: createInputGroup,
};
