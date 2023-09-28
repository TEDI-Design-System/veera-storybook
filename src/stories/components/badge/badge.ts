import '@scss/components/badge.scss';
import '@scss/typography.scss';
import clsx from 'clsx';
import { createIcon } from '../../utils';

type BadgeVariant = 'info' | 'success' | 'warning' | 'error' | 'neutral';

export interface BadgeStoryProps {
  variant: BadgeVariant;
  hasIcon?: boolean;
}

const createBadgeIcon = (variant: BadgeVariant) => {
  const iconName: Record<BadgeVariant, string> = {
    info: 'flag',
    success: 'check',
    warning: 'warning_amber',
    error: 'close',
    neutral: 'label',
  };
  return createIcon({ name: iconName[variant], outlined: true });
};

export const createBadge = ({ variant = 'info', hasIcon = true }: BadgeStoryProps) => {
  const badge = document.createElement('div');
  badge.className = clsx('v-badge', `v-badge--${variant}`);
  const text = document.createElement('span');
  text.innerHTML = variant.charAt(0).toUpperCase() + variant.slice(1);
  if (hasIcon) {
    const icon = document.createElement('div');
    icon.className = 'v-badge__icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.appendChild(createBadgeIcon(variant));
    badge.appendChild(icon);
  }
  badge.appendChild(text);

  return badge;
};
