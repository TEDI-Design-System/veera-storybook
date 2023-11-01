import type { StoryObj } from '@storybook/html';
import { TEXT_VARIANTS, TextProps, createText, createTextCollection } from './typography';
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
      options: TEXT_VARIANTS.map((variant) => variant[0]),
    },
  },
  args: {
    variant: 'h1',
  },
};
