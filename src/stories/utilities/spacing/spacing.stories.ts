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

type Story<T> = StoryObj<T>;

export const Spacing: Story<SpacingProps> = {
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
      control: { type: 'number', min: 0, max: 12 },
    },
  },
  args: {
    type: 'padding',
    area: 'all',
    spacing: 0,
  },
};

export const Grid: Story<GridSpacingProps> = {
  render: (args) => {
    return createGridSpacingTemplate(args);
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['gap', 'row-gap', 'column-gap'],
    },
    spacing: {
      control: { type: 'number', min: 0, max: 12 },
    },
  },
  args: {
    type: 'gap',
    spacing: 0,
  },
};
