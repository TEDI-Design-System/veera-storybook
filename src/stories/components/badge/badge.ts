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
    error: 'report',
    neutral: 'label',
  };
  const icon = createIcon({ name: iconName[variant], outlined: true });
  icon.classList.add('v-badge__icon');
  return icon;
};

export const createBadge = ({ variant = 'info', hasIcon = true }: BadgeStoryProps) => {
  const badge = document.createElement('div');
  badge.className = clsx('v-badge', `v-badge--${variant}`);
  const text = document.createElement('span');
  text.innerHTML = variant.charAt(0).toUpperCase() + variant.slice(1);
  if (hasIcon) {
    badge.appendChild(createBadgeIcon(variant));
  }
  badge.appendChild(text);

  return badge;
};
