import clsx from 'clsx';
import { createIcon } from '../../utils';

export interface LinkStoryProps {
  size: 'xs' | 'sm' | 'md';
  hasIcon?: boolean;
}

export const createLink = ({ size, hasIcon }: LinkStoryProps) => {
  const link = document.createElement('a');

  link.className = clsx('v-link', { [`v-link--${size}`]: size, 'v-link--with-icon': hasIcon });
  link.innerText = 'Link';
  link.href = '#';

  if (hasIcon) {
    link.appendChild(createIcon({ name: 'open_in_new' }));
  }

  return link;
};
