import { createPopper } from '@popperjs/core';
import { createButton, createCloseButton } from '../button/button';
import '@scss/components/popover.scss';
import './popover.stories.scss';
import { createContentFill } from '../../utils';

export interface PopoverStoryProps {
  placement: 'top' | 'bottom' | 'left' | 'right';
}

const createPopoverHeader = () => {
  const header = document.createElement('div');
  header.className = 'v-popover__header';
  header.appendChild(createTitle());
  return header;
};

const createPopoverBody = () => {
  const body = document.createElement('div');
  body.className = 'v-popover__body';
  const content = createContentFill();
  body.appendChild(content);
  return body;
};

const createPopoverFooter = () => {
  const footer = document.createElement('div');
  footer.className = 'v-popover__footer';
  footer.append(createButton({ label: 'Katkestan', variant: 'secondary' }));
  footer.append(createButton({ label: 'Edasi' }));
  return footer;
};

const createTitle = () => {
  const title = document.createElement('h4');
  title.className = 'v-popover__title';
  title.textContent = 'Modaalmulli pealkiri';
  return title;
};

export const createPopover = ({ placement = 'top' }: PopoverStoryProps) => {
  const trigger = createButton({ label: 'Popover' });
  const popover = document.createElement('div');
  popover.className = 'v-popover';

  const popoverContent = document.createElement('div');
  popoverContent.className = 'v-popover__content';
  popoverContent.appendChild(createCloseButton());
  popoverContent.appendChild(createPopoverHeader());
  popoverContent.appendChild(createPopoverBody());
  popoverContent.appendChild(createPopoverFooter());
  popover.appendChild(popoverContent);

  const container = document.createElement('div');
  container.className = 'story-container';
  container.appendChild(trigger);
  container.appendChild(popover);

  const popperInstance = createPopper(trigger, popover, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 20],
        },
      },
    ],
  });

  function show() {
    popover.classList.add('v-popover--visible');

    popperInstance.setOptions((options) => ({
      ...options,
      modifiers: [...(options.modifiers ?? []), { name: 'eventListeners', enabled: true }],
    }));

    popperInstance.update();
  }

  function hide() {
    popover.classList.remove('v-popover--visible');

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
