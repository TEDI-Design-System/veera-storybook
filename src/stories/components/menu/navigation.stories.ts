import { StoryObj } from '@storybook/html';
import { createSideNavigation } from './side-navigation';
import { createHorizontalNavigation } from './horizontal-navigation';

const meta = {
  title: 'components/navigation',
  tags: ['autodocs'],
};

export default meta;

export const SideNavigation: StoryObj = {
  render: createSideNavigation,
};

export const HorizontalNavigation: StoryObj = {
  render: createHorizontalNavigation,
};
