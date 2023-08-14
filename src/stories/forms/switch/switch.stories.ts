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

type Story<T> = StoryObj<T>;

export const Default: Story<SwitchProps> = {
  render: createSwitch,
  args: {},
};

export const WithLock: Story<SwitchProps> = {
  render: createSwitch,
  args: {
    hasIcon: true,
  },
};

export const WithLabel: Story<SwitchWithLabelProps> = {
  render: createSwitchWithLabel,
  args: {
    hasIcon: true,
    label: 'Switch',
  },
};
