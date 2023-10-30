import clsx from 'clsx';
import { createIcon } from '../../utils';
import '@scss/components/link.scss';

export interface LinkStoryProps {
  size: 'xs' | 'sm' | 'md';
  hasIcon?: boolean;
}

export const createLink = ({ size, hasIcon }: LinkStoryProps) => {
  const link = document.createElement('a');

  link.className = clsx('v-link', { [`v-link--${size}`]: size });
  link.innerText = 'Link';
  link.href = '#';

  if (hasIcon) {
    const icon = createIcon({ name: 'open_in_new' });
    icon.classList.add('v-link-icon');
    link.appendChild(icon);
  }

  return link;
};
