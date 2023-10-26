import type { Meta, StoryObj } from '@storybook/html';
import {
  UnorderedListStory,
  createDefinitionList,
  createOrderedListStory,
  createUnorderedListStory,
} from './list';

const meta = {
  title: 'components/list',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const UnorderedList: StoryObj = {
  render: createUnorderedListStory,
};

export const PlainList: StoryObj<UnorderedListStory> = {
  render: createUnorderedListStory,
  args: {
    plain: true,
  },
};

export const DefinitionList: StoryObj = {
  render: createDefinitionList,
};

export const OrderedList: StoryObj = {
  render: createOrderedListStory,
};
