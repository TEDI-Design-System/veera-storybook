import { createButton } from './components/button/button';
import { logoString } from './components/logo/logo';
import { createPopper } from '@popperjs/core';
import clsx from 'clsx';

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
  buttonsOffset = '0',
}: {
  scrollableEl: HTMLElement;
  container: HTMLElement;
  buttonsOffset?: string;
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
      createHorizontalScrollButtons({ scrollableEl, container, buttonsOffset });
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
      scrollLeftBtn.setAttribute('aria-hidden', 'true');
      scrollLeftBtn.id = 'left-scroll-btn';
      scrollLeftBtn.tabIndex = -1;
      scrollLeftBtn.style.position = 'absolute';
      scrollLeftBtn.style.zIndex = '5';
      scrollLeftBtn.style.left = buttonsOffset;
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
      scrollRightBtn.setAttribute('aria-hidden', 'true');
      scrollRightBtn.id = 'right-scroll-btn';
      scrollRightBtn.tabIndex = -1;
      scrollRightBtn.style.position = 'absolute';
      scrollRightBtn.style.zIndex = '5';
      scrollRightBtn.style.right = buttonsOffset;
      scrollRightBtn.style.top = '50%';
      scrollRightBtn.style.transform = 'translateY(-50%)';
      scrollRightBtn.onclick = () => {
        scrollableEl.scrollLeft = scrollableEl.scrollWidth - scrollableEl.clientWidth + 10;
        onScroll();
      };
      container.appendChild(scrollRightBtn);
    }
  }
};

export const createIcon = ({
  name,
  outlined,
  label,
}: {
  name: string;
  outlined?: boolean;
  label?: string;
}) => {
  const icon = document.createElement('span');
  icon.className = outlined ? 'material-icons-outlined' : 'material-icons';
  icon.innerText = name;
  if (label) {
    icon.setAttribute('aria-label', label);
  } else {
    icon.setAttribute('aria-hidden', 'true');
  }
  return icon;
};

export const createLink = ({
  text,
  size,
  icon,
}: {
  text: string;
  size?: 'xs' | 'sm' | 'md';
  icon?: string;
}) => {
  const link = document.createElement('a');
  link.className = clsx({ [`v-link--${size}`]: size, 'v-link--with-icon': icon });
  link.href = '#';
  if (icon) {
    link.appendChild(createIcon({ name: icon }));
  }
  link.appendChild(document.createTextNode(text));
  return link;
};

export const createLogo = (isLink?: boolean) => {
  const logoWrapper = document.createElement(isLink ? 'a' : 'div');
  if (isLink) {
    (logoWrapper as HTMLAnchorElement).href = '#';
  }
  logoWrapper.className = 'v-logo';
  logoWrapper.innerHTML = logoString;
  return logoWrapper;
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
  tooltip.setAttribute('role', 'tooltip');
  tooltip.id = `tooltip-${Math.random()}`;
  tooltip.setAttribute('aria-hidden', 'true');
  triggerElement.setAttribute('aria-describedby', tooltip.id);

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
