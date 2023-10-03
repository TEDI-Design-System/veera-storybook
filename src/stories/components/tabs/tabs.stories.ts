import type { Meta, StoryObj } from '@storybook/html';
import { TabItemProps, TabsStoryProps, createTabItem, createTabs } from './tabs';

const meta = {
  title: 'components/tabs',
  tags: ['autodocs'],
  render: createTabs,
} satisfies Meta<TabsStoryProps>;

export default meta;

export const Tabs: StoryObj<TabsStoryProps> = {};

export const TabItem: StoryObj<TabItemProps> = {
  render: createTabItem,
  args: {
    number: 1,
    selected: false,
    disabled: false,
  },
};
