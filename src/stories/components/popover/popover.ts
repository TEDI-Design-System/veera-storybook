import { createPopper } from '@popperjs/core';
import { createButton, createCloseButton } from '../button/button';
import './popover.stories.scss';
import { createContentFill } from '../../utils';

export interface PopoverStoryProps {
  placement: 'top' | 'bottom' | 'left' | 'right';
}

const titleId = 'popover-title';

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
  title.id = titleId;
  return title;
};

export const createPopover = ({ placement = 'top' }: PopoverStoryProps) => {
  let opened = false;

  const trigger = createButton({ label: 'Popover' });
  trigger.setAttribute('aria-expanded', 'false');

  const popover = document.createElement('div');
  popover.id = 'popover-example';
  popover.role = 'region';
  popover.setAttribute('aria-labelledby', titleId);
  popover.className = 'v-popover';
  trigger.setAttribute('aria-controls', popover.id);

  const popoverContent = document.createElement('div');
  popoverContent.className = 'v-popover__content';
  popoverContent.appendChild(createCloseButton('Sulge modaalmull'));
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
    }));

    popperInstance.update();
  }

  function hide() {
    popover.classList.remove('v-popover--visible');
  }

  trigger.onclick = () => {
    opened = !opened;
    if (opened) {
      show();
    } else {
      hide();
    }
    trigger.setAttribute('aria-expanded', opened.toString());
  };

  return container;
};
