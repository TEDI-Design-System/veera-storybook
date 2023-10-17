import type { Meta, StoryObj } from '@storybook/html';
import { PopoverStoryProps, createPopover } from './popover';

const meta = {
  title: 'components/popover',
  tags: ['autodocs'],
  render: createPopover,
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
} satisfies Meta<PopoverStoryProps>;

export default meta;

export const Popover: StoryObj<PopoverStoryProps> = {};
