import type { StoryObj } from '@storybook/html';
import { SwitchProps, SwitchWithLabelProps, createSwitch, createSwitchWithLabel } from './switch';

const meta = {
  title: 'forms/switch',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: { type: 'boolean' },
    hasIcon: { type: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<SwitchProps> = {
  render: createSwitch,
  args: {},
};

export const WithCheck: StoryObj<SwitchProps> = {
  render: createSwitch,
  args: {
    hasIcon: true,
  },
};

export const WithLabel: StoryObj<SwitchWithLabelProps> = {
  render: createSwitchWithLabel,
  args: {
    hasIcon: true,
    label: 'Switch',
  },
};
