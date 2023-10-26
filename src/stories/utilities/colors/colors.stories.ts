import type { StoryObj } from '@storybook/html';
import { createBackgroundExamples, createTextColorExamples } from './colors';

const meta = {
  title: 'utilities/colors',
  tags: ['autodocs'],
};

export default meta;

export const BackgroundColor: StoryObj = {
  render: createBackgroundExamples,
};

export const TextColor: StoryObj = {
  render: createTextColorExamples,
};
