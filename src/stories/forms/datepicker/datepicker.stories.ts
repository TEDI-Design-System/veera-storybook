import type { StoryObj } from '@storybook/html';
import {
  DatepickerDayStoryProps,
  DatepickerStoryProps,
  createDatepicker,
  createDatepickerDay,
} from './datepicker';
const meta = {
  title: 'forms/datepicker',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<DatepickerStoryProps>;

export const Default: Story = {
  render: createDatepicker,
  argTypes: {
    position: { control: { type: 'select' }, options: ['top', 'bottom'] },
  },
  args: {
    position: 'bottom',
  },
};

export const Day: StoryObj<DatepickerDayStoryProps> = {
  render: createDatepickerDay,
  args: {
    disabled: false,
    muted: false,
    selected: false,
    today: false,
  },
};
