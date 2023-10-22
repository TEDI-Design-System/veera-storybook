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
  fullWidth?: boolean;
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
  fullWidth,
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
    'v-button--full-width': fullWidth,
    'material-icons': iconOnly,
  });
  btn.disabled = !!disabled;

  return btn;
};

export const createCloseButton = (label?: string, small?: boolean) => {
  const close = document.createElement('button');
  close.className = clsx('v-close-button', { 'v-close-button--sm': small });
  close.setAttribute('aria-label', label || 'Sulge Aken');
  return close;
};
