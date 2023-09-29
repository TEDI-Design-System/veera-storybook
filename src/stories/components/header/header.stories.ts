import { StoryObj } from '@storybook/html';
import { createHeader } from './header';

const meta = {
  title: 'components/header',
  tags: ['autodocs'],
};

export default meta;

export const Header: StoryObj = {
  render: createHeader,
};
