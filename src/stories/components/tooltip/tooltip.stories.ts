import type { Meta, StoryObj } from '@storybook/html';
import { TooltipStoryProps, createSimpleTooltip, createTooltip } from './tooltip';

const meta = {
  title: 'components/tooltip',
  tags: ['autodocs'],
  render: createTooltip,
} satisfies Meta<TooltipStoryProps>;

export default meta;

export const PopperTooltip: StoryObj<TooltipStoryProps> = {
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export const SimpleTooltip: StoryObj = {
  render: createSimpleTooltip,
};
