import '@scss/forms/forms.scss';

export interface CheckboxProps {
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const createCheckbox = ({ disabled, indeterminate, size = 'md' }: CheckboxProps) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.disabled = !!disabled;
  checkbox.className = `v-checkbox v-checkbox--${size}`;
  checkbox.setAttribute('aria-label', 'standalone checkbox');
  checkbox.indeterminate = !!indeterminate;

  return checkbox;
};

export interface CheckboxWithLabelProps extends CheckboxProps {
  label: string;
}
export const createCheckboxWithLabel = ({ label, size, ...inputProps }: CheckboxWithLabelProps) => {
  const container = document.createElement('div');
  const id = `v-checkbox-label-${Math.random()}`;

  container.className = `v-checkbox v-checkbox--${size}`;
  const checkbox = createCheckbox({ ...inputProps });
  checkbox.id = id;
  container.appendChild(checkbox);

  const labelEl = document.createElement('label');
  labelEl.innerText = label;
  labelEl.htmlFor = id;
  container.appendChild(labelEl);

  return container;
};
