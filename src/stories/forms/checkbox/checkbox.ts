import clsx from 'clsx';

export interface CheckboxProps {
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  error?: boolean;
  success?: boolean;
  ariaHidden?: boolean;
}

export const createCheckbox = ({
  disabled,
  indeterminate,
  size = 'md',
  checked = false,
  error,
  success,
  ariaHidden,
}: CheckboxProps) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.disabled = !!disabled;
  checkbox.checked = checked;
  checkbox.className = clsx('v-checkbox', {
    [`v-checkbox--${size}`]: size,
    'v-checkbox--error': error,
    'v-checkbox--success': success,
  });
  checkbox.indeterminate = !!indeterminate;
  if (ariaHidden) {
    checkbox.setAttribute('aria-hidden', 'true');
  }

  return checkbox;
};

export const createStandaloneCheckboxStory = (props: CheckboxProps) => {
  const checkbox = createCheckbox(props);
  checkbox.setAttribute('aria-label', 'standalone checkbox');

  return checkbox;
};

export interface CheckboxWithLabelProps extends CheckboxProps {
  label: string;
}
export const createCheckboxWithLabel = ({
  label,
  size,
  error,
  success,
  ...inputProps
}: CheckboxWithLabelProps) => {
  const container = document.createElement('div');
  const id = `v-checkbox-label-${Math.random()}`;

  container.className = clsx('v-checkbox', {
    [`v-checkbox--${size}`]: size,
    'v-checkbox--error': error,
    'v-checkbox--success': success,
  });
  const checkbox = createCheckbox({ ...inputProps });
  checkbox.id = id;
  container.appendChild(checkbox);

  const labelEl = document.createElement('label');
  labelEl.innerText = label;
  labelEl.htmlFor = id;
  container.appendChild(labelEl);

  return container;
};

export const createCheckboxGroup = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const group = document.createElement('div');
  group.className = `v-checkbox-group v-checkbox-group--${size}`;

  group.appendChild(createCheckboxWithLabel({ size, label: 'Checkbox', indeterminate: true }));

  const subGroup = document.createElement('div');
  subGroup.className = 'v-checkbox-group v-checkbox-group--sub-group';

  for (let i = 0; i < 4; i++) {
    subGroup.appendChild(createCheckboxWithLabel({ size, label: 'Checkbox', checked: i === 0 }));
  }

  group.appendChild(subGroup);
  return group;
};
