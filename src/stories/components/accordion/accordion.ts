import clsx from 'clsx';
import { createContentFill, createIcon } from '../../utils';

export interface AccordionStoryProps {
  disabled?: boolean;
  size: 'sm' | 'lg';
}

const createAccordionHeader = () => {
  const accordionHeader = document.createElement('button');
  accordionHeader.className = 'v-accordion__header';
  accordionHeader.id = 'accordion-header';
  accordionHeader.setAttribute('aria-expanded', 'false');

  const accordionTitle = document.createElement('h4');
  accordionTitle.className = 'v-accordion__title';
  accordionTitle.innerText = 'Accordion title';
  accordionHeader.appendChild(accordionTitle);

  const expandIcon = createIcon({ name: 'expand_more' });
  expandIcon.classList.add('v-accordion__expand-icon');
  accordionHeader.appendChild(expandIcon);

  return accordionHeader;
};

const createAccordionContent = () => {
  const accordionCollapse = document.createElement('div');
  accordionCollapse.className = 'v-accordion__collapse';
  accordionCollapse.setAttribute('role', 'region');
  accordionCollapse.id = 'accordion-content';

  const accordionContentArea = document.createElement('div');
  accordionContentArea.className = 'v-accordion__content';
  accordionContentArea.appendChild(createContentFill());
  accordionCollapse.appendChild(accordionContentArea);

  return accordionCollapse;
};

export const createAccordion = ({ disabled, size = 'sm' }: AccordionStoryProps) => {
  let expanded = false;

  const accordion = document.createElement('div');
  accordion.className = clsx('v-accordion', `v-accordion--${size}`, {
    'v-accordion--disabled': disabled,
  });

  const accordionHeader = createAccordionHeader();
  accordionHeader.disabled = !!disabled;
  accordionHeader.onclick = () => {
    expanded = !expanded;
    if (expanded) {
      accordion.classList.add('v-accordion--expanded');
    } else {
      accordion.classList.remove('v-accordion--expanded');
    }
    accordionHeader.setAttribute('aria-expanded', expanded.toString());
  };
  accordion.appendChild(accordionHeader);

  const accordionContent = createAccordionContent();
  accordionContent.setAttribute('aria-labelledby', accordionHeader.id);
  accordionHeader.setAttribute('aria-controls', accordionContent.id);

  accordion.appendChild(accordionContent);

  return accordion;
};
