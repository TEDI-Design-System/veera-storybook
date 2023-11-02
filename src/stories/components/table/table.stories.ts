import type { Meta, StoryObj } from '@storybook/html';
import { TableStoryProps, createMobileTable, createScrollableTable, createTable } from './table';

const meta = {
  title: 'components/table',
  tags: ['autodocs'],
  render: createTable,
} satisfies Meta<TableStoryProps>;

export default meta;

export const Table: StoryObj<TableStoryProps> = {
  args: {
    interactive: false,
    fixed: false,
    nestedHead: false,
  },
};

export const ScrollableTable: StoryObj<TableStoryProps> = {
  render: createScrollableTable,
  args: {
    bordered: false,
    interactive: false,
    fixed: false,
    sticky: false,
    nestedHead: false,
  },
};

export const MobileTable: StoryObj = {
  render: createMobileTable,
  args: {
    editButton: false,
  },
};
