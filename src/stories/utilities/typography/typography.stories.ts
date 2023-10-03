import type { StoryObj } from '@storybook/html';
import {
  TEXT_VARIANTS,
  TextProps,
  createLink,
  createText,
  createTextCollection,
} from './typography';
const meta = {
  title: 'utilities/typography',
  tags: ['autodocs'],
};

export default meta;

export const Collection: StoryObj = {
  render: () => {
    return createTextCollection();
  },
};

export const Playground: StoryObj<TextProps> = {
  render: createText,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: TEXT_VARIANTS,
    },
  },
  args: {
    variant: 'h1',
  },
};

export const Link: StoryObj<{ size: 'xs' | 'sm' | 'md' }> = {
  render: createLink,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md'],
    },
  },
};
