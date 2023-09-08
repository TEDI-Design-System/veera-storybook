import '@scss/forms/forms.scss';
import clsx from 'clsx';

export interface FormControlStoryProps {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  placeholder?: string;
  status?: 'success' | 'error';
}

export const createInputControl = ({
  size,
  disabled,
  status,
  placeholder = '',
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
  placeholder = '',
}: FormControlStoryProps) => {
  const textarea = document.createElement('textarea');
  textarea.placeholder = placeholder;
  textarea.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  textarea.disabled = !!disabled;

  return textarea;
};

interface SelectControlStoryProps extends FormControlStoryProps {
  options?: { text: string; value: string }[];
}

export const createSelectControl = ({
  size,
  disabled,
  status,
  options,
}: SelectControlStoryProps) => {
  const optionList = options ?? [
    { text: 'Option 1', value: 'option-1' },
    { text: 'Option 2', value: 'option-2' },
    { text: 'Option 3', value: 'option-3' },
  ];

  const select = document.createElement('select');
  select.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  select.disabled = !!disabled;

  for (const opt of optionList) {
    const option = new Option(opt.text, opt.value);
    select.appendChild(option);
  }

  select.ariaLabel = 'valikukasti näide';

  return select;
};

export interface IconInputProps extends FormControlStoryProps {
  leftIcon?: string;
  rightIcon?: string;
}

export const createIconInput = ({ size, leftIcon, rightIcon, ...inputProps }: IconInputProps) => {
  const createIcon = (iconName: string, position: 'left' | 'right') => {
    const icon = document.createElement('span');
    icon.className = `material-icons v-form-control-icon v-form-control-icon--${position}`;
    icon.innerText = iconName;
    return icon;
  };

  const wrapper = document.createElement('div');
  wrapper.className = clsx('v-icon-input', `v-icon-input--${size}`, {
    'v-icon-input--left-icon': !!leftIcon,
    'v-icon-input--right-icon': !!rightIcon,
  });

  const input = createInputControl(inputProps);
  wrapper.appendChild(input);

  if (leftIcon) {
    const icon = createIcon(leftIcon, 'left');
    wrapper.appendChild(icon);
  }

  if (rightIcon) {
    const icon = createIcon(rightIcon, 'right');
    wrapper.appendChild(icon);
  }

  return wrapper;
};
