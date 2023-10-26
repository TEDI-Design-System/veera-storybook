import type { StoryObj } from '@storybook/html';
import { createRadiusExamples } from './radius';

const meta = {
  title: 'utilities/radius',
  tags: ['autodocs'],
};

export default meta;

export const Radius: StoryObj = {
  render: createRadiusExamples,
};
