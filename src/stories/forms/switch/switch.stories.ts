import type { StoryObj } from '@storybook/html';
import { SwitchProps, SwitchWithLabelProps, createSwitch, createSwitchWithLabel } from './switch';

const meta = {
  title: 'forms/switch',
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
    hasIcon: { type: 'boolean' },
  },
};

export default meta;

export const Default: StoryObj<SwitchProps> = {
  render: createSwitch,
  args: {},
};

export const WithLock: StoryObj<SwitchProps> = {
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
