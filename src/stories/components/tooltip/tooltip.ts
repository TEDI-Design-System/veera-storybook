import { createPopper } from '@popperjs/core';
import { createButton } from '../button/button';
import '@scss/components/tooltip.scss';
import './tooltip.stories.scss';
import { createLink } from '../../utils';

export interface TooltipStoryProps {
  placement: 'top' | 'bottom' | 'left' | 'right';
}

export const createTooltip = ({ placement = 'top' }: TooltipStoryProps) => {
  const trigger = createButton({ label: 'Tooltip' });
  const tooltip = document.createElement('div');
  tooltip.className = 'v-tooltip';
  tooltip.innerText = 'Tooltip content very long text, pikem kui 240px :-)';

  const container = document.createElement('div');
  container.className = 'story-container';
  container.appendChild(trigger);
  container.appendChild(tooltip);

  const popperInstance = createPopper(trigger, tooltip, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 4],
        },
      },
    ],
  });

  function show() {
    tooltip.classList.add('v-tooltip--visible');

    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: true }],
    }));

    popperInstance.update();
  }

  function hide() {
    tooltip.classList.remove('v-tooltip--visible');

    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: false }],
    }));
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach((event) => {
    trigger.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    trigger.addEventListener(event, hide);
  });

  return container;
};

export const createSimpleTooltip = () => {
  const trigger = createLink('Tooltip');
  trigger.dataset.vTooltip = 'Tooltip content';

  const container = document.createElement('div');
  container.className = 'story-container';
  container.appendChild(trigger);

  return container;
};
