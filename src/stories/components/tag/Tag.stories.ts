import type { Meta, StoryObj } from '@storybook/html';
import { TagProps, createTag } from './tag';

const meta = {
  title: 'components/tag',
  tags: ['autodocs'],
  render: createTag,
} satisfies Meta<TagProps>;

export default meta;

export const Tag: StoryObj<TagProps> = {};

export const Closable: StoryObj<TagProps> = {
  args: {
    closable: true,
  },
};
