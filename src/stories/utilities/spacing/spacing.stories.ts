import type { StoryObj } from '@storybook/html';
import {
  GridSpacingProps,
  SpacingProps,
  createGridSpacingTemplate,
  createSpacingTemplate,
} from './spacing';

const meta = {
  title: 'utilities/spacing',
  tags: ['autodocs'],
};

export default meta;

export const Spacing: StoryObj<SpacingProps> = {
  render: (args) => {
    return createSpacingTemplate(args);
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['margin', 'padding'],
    },
    area: {
      control: { type: 'select' },
      options: ['top', 'left', 'right', 'bottom', 'x', 'y', 'all'],
    },
    spacing: {
      control: { type: 'number', min: 0, max: 13 },
    },
  },
  args: {
    type: 'padding',
    area: 'all',
    spacing: 0,
  },
};

export const Grid: StoryObj<GridSpacingProps> = {
  render: (args) => {
    return createGridSpacingTemplate(args);
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['gap', 'row-gap', 'column-gap'],
    },
    gap: {
      control: { type: 'number', min: 0, max: 13 },
    },
  },
  args: {
    type: 'gap',
    gap: 0,
  },
};
