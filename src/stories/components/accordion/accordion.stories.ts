import type { Meta, StoryObj } from '@storybook/html';
import { AccordionStoryProps, createAccordion } from './accordion';

const meta = {
  title: 'components/accordion',
  tags: ['autodocs'],
  render: createAccordion,
} satisfies Meta<AccordionStoryProps>;

export default meta;

export const Accordion: StoryObj<AccordionStoryProps> = {
  args: {
    disabled: false,
  },
};
