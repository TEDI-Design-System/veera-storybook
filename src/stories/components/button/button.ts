import { clsx } from 'clsx';
import '@scss/components/button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'neutral' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  iconOnly: boolean;
}
export const createButton = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled,
  iconOnly,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = clsx('v-button', `v-button--${variant}`, `v-button--${size}`, {
    'v-button--icon-only': iconOnly,
    'material-icons': iconOnly,
  });
  btn.disabled = !!disabled;

  return btn;
};
