import type { Meta, StoryObj } from '@storybook/html';
import { AutocompleteStoryProps, createAutocomplete } from './autocomplete';
const meta = {
  title: 'forms/autocomplete',
  tags: ['autodocs'],
  render: createAutocomplete,
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
  args: {
    size: 'md',
  },
} satisfies Meta<AutocompleteStoryProps>;

export default meta;

type Story = StoryObj<AutocompleteStoryProps>;

export const Default: Story = {};

export const HeaderSearch: Story = {
  args: {
    withButton: true,
  },
};
