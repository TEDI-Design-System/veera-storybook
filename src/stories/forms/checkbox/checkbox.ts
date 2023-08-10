import '@scss/forms/forms.scss';

export interface CheckboxProps {
  disabled?: boolean;
}

export const createCheckbox = ({ disabled }: CheckboxProps) => {
  return `<input type="checkbox" ${
    disabled ? 'disabled' : ''
  } id="v-checkbox-demo" class="v-checkbox"/>`;
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
