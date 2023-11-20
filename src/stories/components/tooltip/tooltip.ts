import { createButton } from '../button/button';
import './tooltip.stories.scss';
import { createTooltip } from '../../utils';

export interface TooltipStoryProps {
  placement: 'top' | 'bottom' | 'left' | 'right';
}

export const createTooltipStory = ({ placement = 'top' }: TooltipStoryProps) => {
  const trigger = createButton({ label: 'Tooltip' });
  const tooltip = createTooltip({
    triggerElement: trigger,
    placement,
    text: 'Vihjemullis olev tekst võib minna mitmele reale',
  });

  const container = document.createElement('div');
  container.className = 'story-container';
  container.appendChild(trigger);
  container.appendChild(tooltip);

  return container;
};

export const createStaticTooltip = () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'v-tooltip v-tooltip--visible v-tooltip--top';
  tooltip.innerText = 'Tooltip';
  tooltip.role = 'tooltip';

  return tooltip;
};
