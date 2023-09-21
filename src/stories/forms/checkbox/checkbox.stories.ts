import type { Meta, StoryObj } from '@storybook/html';
import {
  CheckboxProps,
  CheckboxWithLabelProps,
  createCheckbox,
  createCheckboxWithLabel,
} from './checkbox';

const meta = {
  title: 'forms/checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { type: 'boolean' },
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
  render: createCheckbox,
  args: {
    disabled: false,
  },
};

export const Indeterminate: StoryObj<CheckboxProps> = {
  render: createCheckbox,
  args: {
    disabled: false,
    indeterminate: true,
  },
};
