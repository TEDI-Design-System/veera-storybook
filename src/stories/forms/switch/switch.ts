import '@scss/forms/forms.scss';
import clsx from 'clsx';

export interface SwitchProps {
  disabled?: boolean;
  hasIcon?: boolean;
}
export const createSwitch = ({ disabled, hasIcon }: SwitchProps) => {
  return `<input aria-label="Standalone switch" type="checkbox" ${
    disabled ? 'disabled' : ''
  } class="${clsx('v-switch', {
    'v-switch--check-icon': hasIcon,
  })}"/>`;
};

export interface SwitchWithLabelProps extends SwitchProps {
  label: string;
}

export const createSwitchWithLabel = ({ disabled, hasIcon, label }: SwitchWithLabelProps) => {
  return `<div class="${clsx('v-switch', {
    'v-switch--check-icon': hasIcon,
  })}">
    <input id="switch-demo" type="checkbox" ${disabled ? 'disabled' : ''} />
    <label for="switch-demo">${label}</label>
  </div>`;
};
