import clsx from 'clsx';
import '@scss/components/stepper.scss';
import { createHorizontalScrollButtons } from '../../utils';

export interface StepperStepProps {
  number: number;
  active?: boolean;
  completed?: boolean;
  name?: string;
  onSelect?: (nr: number) => void;
}

export const createStepperStep = ({
  number,
  active,
  completed,
  name = 'Step',
  onSelect,
}: StepperStepProps) => {
  const step = document.createElement('button');
  step.className = clsx('v-stepper__step', {
    'v-stepper__step--active': active,
    'v-stepper__step--completed': completed,
  });

  const stepNumber = document.createElement('span');
  stepNumber.className = 'v-stepper__step-number';
  stepNumber.innerText = `${number}`;
  step.appendChild(stepNumber);

  const stepName = document.createTextNode(name);
  step.appendChild(stepName);

  if (onSelect) {
    step.onclick = () => {
      onSelect(number);
    };
  }

  return step;
};

export interface StepperStoryProps {
  activeStep?: number;
}

export const createStepper = ({ activeStep = 0 }: StepperStoryProps) => {
  let activeStepNr = activeStep;

  const scrollButtonsContainer = document.createElement('div');
  scrollButtonsContainer.style.position = 'relative';

  const stepper = document.createElement('div');
  stepper.className = 'v-stepper';
  scrollButtonsContainer.appendChild(stepper);

  const onSelect = (stepNr: number) => {
    activeStepNr = stepNr;
    renderSteps();
  };

  const renderSteps = () => {
    stepper.innerHTML = '';
    for (let stepNr = 0; stepNr <= 10; stepNr++) {
      const step = createStepperStep({
        number: stepNr,
        active: stepNr === activeStepNr,
        completed: stepNr < activeStepNr,
        onSelect,
      });
      stepper.appendChild(step);
    }
  };

  renderSteps();

  setTimeout(() => {
    createHorizontalScrollButtons({ scrollableEl: stepper, container: scrollButtonsContainer });
  }, 100);

  window.onresize = () => {
    createHorizontalScrollButtons({ scrollableEl: stepper, container: scrollButtonsContainer });
  };

  return scrollButtonsContainer;
};
