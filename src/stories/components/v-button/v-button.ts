import { clsx } from 'clsx';
import '@scss/components/v-button/v-button.scss';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  label: string;
  onClick?: () => void;
}
export const createButton = ({ label, variant = 'primary', size =  'md' }: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = clsx('v-button', `v-button--${variant}`, `v-button--${size}`);

  return btn;
};
