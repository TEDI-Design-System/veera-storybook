import type { StoryObj } from '@storybook/html';
import { createFocusRingExamples } from './focus-ring';

const meta = {
  title: 'utilities/focus-ring',
  tags: ['autodocs'],
};

export default meta;

export const FocusRing: StoryObj = {
  render: createFocusRingExamples,
};
