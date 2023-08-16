import '@scss/forms/forms.scss';
import clsx from 'clsx';

export interface FormControlStoryProps {
  size: 'sm' | 'md' | 'lg';
  disabled: boolean;
  placeholder: string;
  status?: 'success' | 'error';
}

export const createInputControl = ({
  size,
  disabled,
  status,
  placeholder,
}: FormControlStoryProps) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  input.disabled = !!disabled;

  return input;
};

export const createTextAreaControl = ({
  size,
  disabled,
  status,
  placeholder,
}: FormControlStoryProps) => {
  const textarea = document.createElement('textarea');
  textarea.placeholder = placeholder;
  textarea.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  textarea.disabled = !!disabled;

  return textarea;
};

export interface InputGroupProps extends FormControlStoryProps {
  startAddon: string;
  endAddon: string;
}

export const createInputGroup = ({ startAddon, endAddon, ...inputProps }: InputGroupProps) => {
  const group = document.createElement('div');
  // textarea.placeholder = placeholder;
  // textarea.className = clsx('v-form-control', `v-form-control--${size}`, {
  //   [`v-form-control--${status}`]: !!status,
  // });
  // textarea.disabled = !!disabled;

  group.className = 'v-input-group';

  if (startAddon) {
    const addon = document.createElement('div');
    addon.className = 'v-input-addon';
    addon.innerText = startAddon;
    group.appendChild(addon);
  }

  return group;
};
