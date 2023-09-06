import type { StoryObj } from '@storybook/html';
import { PhoneInputStoryProps, createPhoneInput } from './phone-input';
const meta = {
  title: 'forms/phone-input',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<PhoneInputStoryProps>;

export const Default: Story = {
  render: createPhoneInput,
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
  args: {
    size: 'sm',
  },
};
