import '@scss/forms/forms.scss';
import clsx from 'clsx';

export interface SwitchProps {
  disabled?: boolean;
  hasIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
export const createSwitch = ({ disabled, hasIcon, size = 'md' }: SwitchProps) => {
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.disabled = !!disabled;
  toggle.className = clsx('v-switch', `v-switch--${size}`, { 'v-switch--check-icon': hasIcon });
  toggle.setAttribute('aria-label', 'standalone switch');

  return toggle;
};

export interface SwitchWithLabelProps extends SwitchProps {
  label: string;
}

export const createSwitchWithLabel = ({
  label,
  size = 'md',
  hasIcon,
  ...inputProps
}: SwitchWithLabelProps) => {
  const container = document.createElement('div');
  const id = `v-switch-label-${Math.random()}`;

  container.className = clsx('v-switch', `v-switch--${size}`, { 'v-switch--check-icon': hasIcon });
  const toggle = createSwitch({ ...inputProps });
  toggle.id = id;
  container.appendChild(toggle);

  const labelEl = document.createElement('label');
  labelEl.innerText = label;
  labelEl.htmlFor = id;
  container.appendChild(labelEl);

  return container;
};
