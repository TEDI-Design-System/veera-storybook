import '@scss/forms/forms.scss';
import clsx from 'clsx';

export interface SwitchProps {
  disabled?: boolean;
  hasIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
export const createSwitch = ({ disabled, hasIcon, size = 'md' }: SwitchProps) => {
  return `<input aria-label="Standalone switch" type="checkbox" ${
    disabled ? 'disabled' : ''
  } class="${clsx('v-switch', `v-switch--${size}`, {
    'v-switch--check-icon': hasIcon,
  })}"/>`;
};

export interface SwitchWithLabelProps extends SwitchProps {
  label: string;
}

export const createSwitchWithLabel = ({
  disabled,
  hasIcon,
  label,
  size = 'md',
}: SwitchWithLabelProps) => {
  return `<div class="${clsx('v-switch', `v-switch--${size}`, {
    'v-switch--check-icon': hasIcon,
  })}">
    <input id="switch-demo" type="checkbox" ${disabled ? 'disabled' : ''} />
    <label for="switch-demo">${label}</label>
  </div>`;
};
