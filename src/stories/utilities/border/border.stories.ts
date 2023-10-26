import type { StoryObj } from '@storybook/html';
import { createBorderExamples } from './border';

const meta = {
  title: 'utilities/border',
  tags: ['autodocs'],
};

export default meta;

export const Border: StoryObj = {
  render: createBorderExamples,
};
