import { clsx } from 'clsx';
import '@scss/components/v-button/v-button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}
export const createButton = ({ label, variant = 'primary', size =  'md', disabled }: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = clsx('v-button', `v-button--${variant}`, `v-button--${size}`);
  btn.disabled = !!disabled;

  return btn;
};
