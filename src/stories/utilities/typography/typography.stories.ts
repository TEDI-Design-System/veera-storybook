import type { StoryObj } from '@storybook/html';
import { TEXT_VARIANTS, TextProps, createText, createTextCollection } from './typography';
const meta = {
  title: 'utilities/typography',
  tags: ['autodocs'],
};

export default meta;

type Story<T = null> = StoryObj<T>;

export const Collection: Story = {
  render: () => {
    return createTextCollection();
  },
  args: null,
};

export const Playground: Story<TextProps> = {
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
