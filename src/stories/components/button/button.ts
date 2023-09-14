import '@scss/components/button.scss';
import { clsx } from 'clsx';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  iconOnly?: boolean;
  floating?: boolean;
}
export const createButton = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconOnly = false,
  floating,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
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
