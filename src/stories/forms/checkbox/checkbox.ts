import '@scss/forms/forms.scss';

export interface CheckboxProps {
  disabled?: boolean;
  indeterminate?: boolean;
}

export const createCheckbox = ({ disabled, indeterminate }: CheckboxProps) => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.disabled = !!disabled;
  checkbox.className = 'v-checkbox';
  checkbox.ariaLabel = 'standalone checkbox';
  checkbox.indeterminate = !!indeterminate;

  return checkbox;
};

export interface CheckboxWithLabelProps extends CheckboxProps {
  label: string;
}
export const createCheckboxWithLabel = ({ label, disabled }: CheckboxWithLabelProps) => {
  return `<div class="v-checkbox">
  <input type="checkbox" ${disabled ? 'disabled' : ''} id="v-checkbox-label-demo"/>${
    label && `<label for="v-checkbox-label-demo">${label}</label>`
  }
  </div>`;
};
