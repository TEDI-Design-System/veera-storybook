import { createButton } from './components/button/button';
import logo from './assets/logo.svg';
import { createPopper } from '@popperjs/core';

export type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR['length'] extends END
  ? ACC | START | END
  : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;

export const createContentFill = () => {
  const content = document.createElement('div');
  content.style.height = '200px';
  content.style.border = '1px dashed lightgray';
  content.style.borderRadius = '4px';
  return content;
};

export const createHorizontalScrollButtons = ({
  scrollableEl,
  container,
}: {
  scrollableEl: HTMLElement;
  container: HTMLElement;
}) => {
  const leftBtnToRemove = container.querySelector('#left-scroll-btn');
  if (leftBtnToRemove) {
    container.removeChild(leftBtnToRemove);
  }

  const rightBtnToRemove = container.querySelector('#right-scroll-btn');
  if (rightBtnToRemove) {
    container.removeChild(rightBtnToRemove);
  }

  const onScroll = () => {
    setTimeout(() => {
      createHorizontalScrollButtons({ scrollableEl, container });
    }, 100);
  };

  if (scrollableEl.scrollWidth > scrollableEl.clientWidth) {
    if (scrollableEl.scrollLeft > 0) {
      const scrollLeftBtn = createButton({
        size: 'sm',
        iconOnly: true,
        floating: true,
        label: 'chevron_left',
      });
      scrollLeftBtn.id = 'left-scroll-btn';
      scrollLeftBtn.style.position = 'absolute';
      scrollLeftBtn.style.left = '0';
      scrollLeftBtn.style.top = '50%';
      scrollLeftBtn.style.transform = 'translateY(-50%)';
      scrollLeftBtn.onclick = () => {
        scrollableEl.scrollLeft = 0;
        onScroll();
      };
      container.appendChild(scrollLeftBtn);
    }
    if (scrollableEl.scrollLeft + scrollableEl.clientWidth < scrollableEl.scrollWidth) {
      const scrollRightBtn = createButton({
        size: 'sm',
        iconOnly: true,
        floating: true,
        label: 'chevron_right',
      });
      scrollRightBtn.id = 'right-scroll-btn';
      scrollRightBtn.style.position = 'absolute';
      scrollRightBtn.style.right = '0';
      scrollRightBtn.style.top = '50%';
      scrollRightBtn.style.transform = 'translateY(-50%)';
      scrollRightBtn.onclick = () => {
        scrollableEl.scrollLeft = scrollableEl.scrollWidth - scrollableEl.clientWidth;
        onScroll();
      };
      container.appendChild(scrollRightBtn);
    }
  }
};

export const createIcon = ({ name, outlined }: { name: string; outlined?: boolean }) => {
  const icon = document.createElement('span');
  icon.className = outlined ? 'material-icons-outlined' : 'material-icons';
  icon.innerText = name;
  icon.setAttribute('aria-hidden', 'true');
  return icon;
};

export const createLink = (text: string) => {
  const link = document.createElement('a');
  link.href = '#';
  link.innerText = text;
  return link;
};

export const createLogo = () => {
  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'logo';
  return img;
};

export const createTooltip = ({
  triggerElement,
  text,
  placement,
}: {
  triggerElement: HTMLElement;
  text: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}) => {
  const tooltip = document.createElement('div');
  tooltip.className = 'v-tooltip';
  tooltip.innerText = text;

  const popperInstance = createPopper(triggerElement, tooltip, {
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
    triggerElement.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    triggerElement.addEventListener(event, hide);
  });

  return tooltip;
};
