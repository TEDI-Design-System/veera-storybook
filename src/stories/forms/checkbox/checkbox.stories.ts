import type { Meta, StoryObj } from '@storybook/html';
import {
  CheckboxProps,
  CheckboxWithLabelProps,
  createCheckboxGroup,
  createCheckboxWithLabel,
  createStandaloneCheckboxStory,
} from './checkbox';

const meta = {
  title: 'forms/checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { type: 'boolean' },
    error: { type: 'boolean' },
    success: { type: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<CheckboxWithLabelProps>;

export default meta;

export const WithLabel: StoryObj<CheckboxWithLabelProps> = {
  render: createCheckboxWithLabel,
  args: {
    label: 'Checkbox',
    disabled: false,
    indeterminate: false,
  },
};

export const Standalone: StoryObj<CheckboxProps> = {
  render: createStandaloneCheckboxStory,
  args: {
    disabled: false,
  },
};

export const Indeterminate: StoryObj<CheckboxProps> = {
  render: createStandaloneCheckboxStory,
  args: {
    disabled: false,
    indeterminate: true,
  },
};

export const Error: StoryObj<CheckboxProps> = {
  render: createStandaloneCheckboxStory,
  args: {
    error: true,
  },
};

export const Success: StoryObj<CheckboxProps> = {
  render: createStandaloneCheckboxStory,
  args: {
    success: true,
  },
};

export const CheckedDisabled: StoryObj<CheckboxWithLabelProps> = {
  render: createCheckboxWithLabel,
  args: {
    disabled: true,
    checked: true,
    label: 'Checked and disabled',
  },
};

export const Group: StoryObj = {
  render: createCheckboxGroup,
  args: {
    size: 'md',
  },
};
