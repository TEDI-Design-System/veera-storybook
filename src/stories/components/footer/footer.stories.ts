import { StoryObj } from '@storybook/html';
import { createFooter } from './footer';

const meta = {
  title: 'components/footer',
  tags: ['autodocs'],
};

export default meta;

export const Footer: StoryObj = {
  render: createFooter,
};
