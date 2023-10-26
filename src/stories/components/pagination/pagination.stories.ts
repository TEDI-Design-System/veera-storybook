import type { Meta, StoryObj } from '@storybook/html';
import { createPagination } from './pagination';

const meta = {
  title: 'components/pagination',
  tags: ['autodocs'],
  render: createPagination,
} satisfies Meta;

export default meta;

export const Pagination: StoryObj = {};
