import '@scss/components/button.scss';
import { clsx } from 'clsx';
import { createIcon } from '../../utils';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  iconOnly?: boolean;
  floating?: boolean;
  leftIcon?: string;
  rightIcon?: string;
}
export const createButton = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconOnly = false,
  floating,
  leftIcon,
  rightIcon,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  if (leftIcon) {
    btn.appendChild(createIcon({ name: leftIcon }));
  }
  const labelText = document.createTextNode(label);
  btn.appendChild(labelText);
  if (rightIcon) {
    btn.appendChild(createIcon({ name: rightIcon }));
  }
  btn.className = clsx('v-button', `v-button--${variant}`, `v-button--${size}`, {
    'v-button--icon-only': iconOnly,
    'v-button--floating': floating,
    'material-icons': iconOnly,
  });
  btn.disabled = !!disabled;

  return btn;
};

export const createCloseButton = () => {
  const close = document.createElement('button');
  close.className = 'v-close-button';
  close.setAttribute('aria-label', 'Sulge Aken');
  return close;
};
