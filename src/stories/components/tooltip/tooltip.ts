import { createButton } from '../button/button';
import '@scss/components/tooltip.scss';
import './tooltip.stories.scss';
import { createLink, createTooltip } from '../../utils';

export interface TooltipStoryProps {
  placement: 'top' | 'bottom' | 'left' | 'right';
}

export const createTooltipStory = ({ placement = 'top' }: TooltipStoryProps) => {
  const trigger = createButton({ label: 'Tooltip' });
  const tooltip = createTooltip({
    triggerElement: trigger,
    placement,
    text: 'Tooltip content very long text, pikem kui 240px :-)',
  });

  const container = document.createElement('div');
  container.className = 'story-container';
  container.appendChild(trigger);
  container.appendChild(tooltip);

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
