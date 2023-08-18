import type { StoryObj } from '@storybook/html';
import { InputGroupProps, createInputGroup, createInputGroupWithIcons } from './input-group';

const meta = {
  title: 'forms/input-group',
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
    startAddon: 'str',
    endAddon: '',
  },
};

export default meta;

export const InputGroup: StoryObj<InputGroupProps> = {
  render: createInputGroup,
};

export const InputGroupWithIcons: StoryObj<InputGroupProps> = {
  render: createInputGroupWithIcons,
};
