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
  },
} satisfies Meta<CheckboxWithLabelProps>;

export default meta;

export const WithLabel: StoryObj<CheckboxWithLabelProps> = {
  render: createCheckboxWithLabel,
  args: {
    label: 'Checkbox',
    disabled: false,
  },
};

export const StandAlone: StoryObj<CheckboxProps> = {
  render: createCheckbox,
  args: {
    disabled: false,
  },
};
