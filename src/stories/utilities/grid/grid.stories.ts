import type { StoryObj } from '@storybook/html';
import { createGridExample } from './grid';

const meta = {
  title: 'utilities/grid',
  tags: ['autodocs'],
};

export default meta;

export const Grid: StoryObj = {
  render: createGridExample,
};
