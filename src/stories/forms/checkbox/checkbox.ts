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
export const createCheckboxWithLabel = ({
  label,
  disabled,
  size = 'md',
}: CheckboxWithLabelProps) => {
  return `<div class="v-checkbox v-checkbox--${size}">
  <input type="checkbox" ${disabled ? 'disabled' : ''} id="v-checkbox-label-demo"/>${
    label && `<label for="v-checkbox-label-demo">${label}</label>`
  }
  </div>`;
};
