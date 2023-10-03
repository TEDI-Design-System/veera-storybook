import { StoryObj } from '@storybook/html';
import { createSideNavigation } from './side-menu';
import { createHorizontalNavigation } from './horizontal-menu';

const meta = {
  title: 'components/menu',
  tags: ['autodocs'],
};

export default meta;

export const SideMenu: StoryObj = {
  render: createSideNavigation,
};

export const HorizontalMenu: StoryObj = {
  render: createHorizontalNavigation,
};
