import type { Meta, StoryObj } from '@storybook/html';
import { SwitchProps, createSwitch } from './switch';

const meta = {
  title: 'forms/switch',
  tags: ['autodocs'],
  render: createSwitch,
  argTypes: {
    disabled: { type: 'boolean' },
  },
} satisfies Meta<SwitchProps>;

export default meta;

type Story = StoryObj<SwitchProps>;

export const Default: Story = {
  args: {},
};
