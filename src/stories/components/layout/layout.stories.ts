import type { Meta, StoryObj } from '@storybook/html';
import { createHorizontalMenuLayout, createVerticalMenuLayout } from './layout';
const meta = {
  title: 'components/layout',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const VerticalMenuLayout: StoryObj = {
  render: createVerticalMenuLayout,
};

export const HorizontalMenuLayout: StoryObj = {
  render: createHorizontalMenuLayout,
};
