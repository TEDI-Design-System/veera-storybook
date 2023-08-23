import type { Meta, StoryObj } from '@storybook/html';
import { FileUploadStoryProps, createFileUpload } from './file-upload';
const meta = {
  title: 'forms/file-upload',
  tags: ['autodocs'],
  render: createFileUpload,
} satisfies Meta<FileUploadStoryProps>;

export default meta;

type Story = StoryObj<FileUploadStoryProps>;

export const Default: Story = {
  args: {
    label: 'Lohistage failid siia või valige kettalt',
    disabled: false,
    error: false,
  },
};
