import type { StoryObj } from '@storybook/html';
import { createVisuallyHiddenFocusableStory, createVisuallyHiddenStory } from './visually-hidden';

const meta = {
  title: 'utilities/visually-hidden',
  tags: ['autodocs'],
};

export default meta;

export const VisuallyHidden: StoryObj = {
  render: createVisuallyHiddenStory,
};

export const VisuallyHiddenFocusable: StoryObj = {
  render: createVisuallyHiddenFocusableStory,
};
