import clsx from 'clsx';
import { createContentFill, createHorizontalScrollButtons } from '../../utils';
import { createButton } from '../button/button';

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
  const step = document.createElement('li');
  step.className = clsx('v-stepper__step', {
    'v-stepper__step--active': active,
    'v-stepper__step--completed': completed,
  });

  const stepLink = document.createElement('a');
  stepLink.className = 'v-stepper__step-link';
  stepLink.href = '#';
  step.appendChild(stepLink);

  const stepNumber = document.createElement('span');
  stepNumber.className = 'v-stepper__step-number';
  stepNumber.innerText = `${number}`;
  stepLink.appendChild(stepNumber);

  const stepName = document.createTextNode(name);
  stepLink.appendChild(stepName);

  if (!completed) {
    stepLink.tabIndex = -1;
    stepLink.style.pointerEvents = 'none';

    if (active) {
      stepLink.setAttribute('aria-current', 'step');
    } else {
      stepLink.setAttribute('aria-disabled', 'true');
    }
  }

  if (onSelect) {
    stepLink.onclick = () => {
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

  const container = document.createElement('div');
  container.className = 'v-flex v-flex-column v-gap-6';

  const scrollButtonsContainer = document.createElement('div');
  scrollButtonsContainer.style.position = 'relative';

  const stepper = document.createElement('nav');
  stepper.className = 'v-stepper';
  stepper.setAttribute('aria-label', 'Sammud');
  scrollButtonsContainer.appendChild(stepper);
  container.appendChild(scrollButtonsContainer);

  const stepList = document.createElement('ul');
  stepList.className = 'v-stepper__list';
  stepper.appendChild(stepList);

  const onSelect = (stepNr: number) => {
    activeStepNr = stepNr;
    renderSteps();
  };

  const renderSteps = () => {
    stepList.innerHTML = '';
    for (let stepNr = 0; stepNr <= 10; stepNr++) {
      const step = createStepperStep({
        number: stepNr,
        active: stepNr === activeStepNr,
        completed: stepNr < activeStepNr,
        onSelect,
      });
      stepList.appendChild(step);
    }
  };

  renderSteps();

  const createScrollBtns = () => {
    createHorizontalScrollButtons({
      scrollableEl: stepper,
      container: scrollButtonsContainer,
      buttonsOffset: '-8px',
    });
  };

  setTimeout(() => {
    createScrollBtns();
  }, 100);

  window.onresize = () => {
    createScrollBtns();
  };

  container.appendChild(createContentFill());

  const buttonsContainer = document.createElement('div');
  buttonsContainer.className = 'v-flex v-justify-content-between v-gap-6';

  const prevButton = createButton({ label: 'Tagasi', leftIcon: 'arrow_back', variant: 'neutral' });
  prevButton.onclick = () => {
    if (activeStepNr > 0) {
      onSelect(activeStepNr - 1);
    }
  };
  buttonsContainer.appendChild(prevButton);

  const nextButton = createButton({ label: 'Edasi' });
  nextButton.onclick = () => {
    if (activeStepNr < 10) {
      onSelect(activeStepNr + 1);
    }
  };
  buttonsContainer.appendChild(nextButton);

  container.appendChild(buttonsContainer);

  return container;
};
