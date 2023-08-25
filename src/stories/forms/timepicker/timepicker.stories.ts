import type { StoryObj } from '@storybook/html';
import { TimepickerStoryProps, createTimepicker } from './timepicker';
const meta = {
  title: 'forms/timepicker',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<TimepickerStoryProps>;

export const Default: Story = {
  render: createTimepicker,
  argTypes: {
    position: { control: { type: 'select' }, options: ['top', 'bottom'] },
  },
  args: {
    position: 'bottom',
  },
};

export const CustomInput: Story = {
  render: createTimepicker,
  argTypes: {
    position: { control: { type: 'select' }, options: ['top', 'bottom'] },
  },
  args: {
    position: 'bottom',
    customInput: true,
  },
};
