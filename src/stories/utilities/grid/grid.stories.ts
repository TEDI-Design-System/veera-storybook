import type { StoryObj } from '@storybook/html';
import { createGridExample } from './grid';

const meta = {
  title: 'utilities/grid',
  tags: ['autodocs'],
};

export default meta;

type Story<T = null> = StoryObj<T>;

export const Grid: Story = {
  render: createGridExample,
  args: null,
};
