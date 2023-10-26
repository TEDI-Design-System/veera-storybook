import type { StoryObj } from '@storybook/html';
import { createHideExamples } from './hide';

const meta = {
  title: 'utilities/hide',
  tags: ['autodocs'],
};

export default meta;

export const Hide: StoryObj = {
  render: createHideExamples,
};
