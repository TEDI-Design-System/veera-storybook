import type { Meta, StoryObj } from '@storybook/html';
import { createModal, ModalStoryProps } from './modal';

const meta = {
  title: 'components/modal',
  tags: ['autodocs'],
  render: createModal,
  parameters: {
    docs: {
      story: {
        iframeHeight: 500,
        inline: false,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'fluid'],
      defaultValue: 'md',
    },
  },
} satisfies Meta<ModalStoryProps>;

export default meta;

export const Modal: StoryObj<ModalStoryProps> = {
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'fluid'],
      defaultValue: 'md',
    },
  },
};

export const Scrollable: StoryObj<ModalStoryProps> = {
  args: {
    scrollable: true,
  },
};
