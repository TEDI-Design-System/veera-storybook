import { clsx } from 'clsx';
import './v-button.scss';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}
export const createButton = ({ label }: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  btn.className = clsx('v-button');

  return btn;
};
