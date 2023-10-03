import '@scss/forms/forms.scss';
import clsx from 'clsx';

export interface ToggleProps {
  disabled?: boolean;
  hasIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
export const createToggle = ({ disabled, hasIcon, size = 'md' }: ToggleProps) => {
  const toggle = document.createElement('input');
  toggle.type = 'checkbox';
  toggle.disabled = !!disabled;
  toggle.className = clsx('v-toggle', `v-toggle--${size}`, { 'v-toggle--check-icon': hasIcon });
  toggle.setAttribute('aria-label', 'standalone toggle');

  return toggle;
};

export interface ToggleWithLabelProps extends ToggleProps {
  label: string;
}

export const createToggleWithLabel = ({
  label,
  size = 'md',
  hasIcon,
  ...inputProps
}: ToggleWithLabelProps) => {
  const container = document.createElement('div');
  const id = `v-toggle-label-${Math.random()}`;

  container.className = clsx('v-toggle', `v-toggle--${size}`, { 'v-toggle--check-icon': hasIcon });
  const toggle = createToggle({ ...inputProps });
  toggle.id = id;
  container.appendChild(toggle);

  const labelEl = document.createElement('label');
  labelEl.innerText = label;
  labelEl.htmlFor = id;
  container.appendChild(labelEl);

  return container;
};
