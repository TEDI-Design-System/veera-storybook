import type { Meta, StoryObj } from '@storybook/html';
import { StepperStepProps, StepperStoryProps, createStepper, createStepperStep } from './stepper';

const meta = {
  title: 'components/stepper',
  tags: ['autodocs'],
  render: createStepper,
} satisfies Meta<StepperStoryProps>;

export default meta;

export const Stepper: StoryObj<StepperStoryProps> = {
  args: {
    activeStep: 3,
  },
};

export const Step: StoryObj<StepperStepProps> = {
  render: createStepperStep,
  args: {
    number: 1,
    active: false,
    completed: false,
  },
};
