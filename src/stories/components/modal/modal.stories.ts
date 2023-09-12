import type { Meta, StoryObj } from '@storybook/html';
import { ModalStoryProps, createModal } from './modal';

const meta = {
  title: 'components/modal',
  tags: ['autodocs'],
  render: createModal,
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
