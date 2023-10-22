import type { StoryObj } from '@storybook/html';
import {
  ToggleProps,
  ToggleWithLabelProps,
  createStandaloneToggleStory,
  createToggleWithLabel,
} from './toggle';

const meta = {
  title: 'forms/toggle',
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

export const Default: StoryObj<ToggleProps> = {
  render: createStandaloneToggleStory,
  args: {},
};

export const WithCheck: StoryObj<ToggleProps> = {
  render: createStandaloneToggleStory,
  args: {
    hasIcon: true,
  },
};

export const WithLabel: StoryObj<ToggleWithLabelProps> = {
  render: createToggleWithLabel,
  args: {
    hasIcon: true,
    label: 'Toggle',
  },
};

export const CheckedDisabled: StoryObj<ToggleWithLabelProps> = {
  render: createToggleWithLabel,
  args: {
    checked: true,
    disabled: true,
    label: 'Toggle',
  },
};
