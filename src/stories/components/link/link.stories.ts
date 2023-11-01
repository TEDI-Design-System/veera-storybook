import type { Meta, StoryObj } from '@storybook/html';
import { LinkStoryProps, createLink } from './link';
const meta = {
  title: 'components/link',
  tags: ['autodocs'],
  render: createLink,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md'],
    },
  },
} satisfies Meta<LinkStoryProps>;

export default meta;

export const Link: StoryObj<LinkStoryProps> = {};

export const WithIcon: StoryObj<LinkStoryProps> = {
  args: {
    hasIcon: true,
  },
};
