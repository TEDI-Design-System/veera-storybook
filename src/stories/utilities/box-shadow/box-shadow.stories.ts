import type { StoryObj } from '@storybook/html';
import { createBoxShadowExamples } from './box-shadow';

const meta = {
  title: 'utilities/box-shadow',
  tags: ['autodocs'],
};

export default meta;

export const BoxShadows: StoryObj = {
  render: createBoxShadowExamples,
};
