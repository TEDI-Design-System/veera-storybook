import clsx from 'clsx';

export interface FormControlStoryProps {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  placeholder?: string;
  status?: 'success' | 'error';
  value?: string;
  ariaLabel?: string;
}

export const createInputControl = ({
  size,
  disabled,
  status,
  placeholder = '',
  value,
  ariaLabel,
}: FormControlStoryProps) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.className = clsx('v-form-control', {
    [`v-form-control--${status}`]: !!status,
    [`v-form-control--${size}`]: size,
  });
  input.disabled = !!disabled;

  if (ariaLabel) {
    input.setAttribute('aria-label', ariaLabel);
  }

  if (value) {
    input.value = value;
  }

  return input;
};

export const createTextAreaControl = ({
  size,
  disabled,
  status,
  placeholder = '',
  value,
}: FormControlStoryProps) => {
  const textarea = document.createElement('textarea');
  textarea.placeholder = placeholder;
  textarea.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  textarea.disabled = !!disabled;

  if (value) {
    textarea.value = value;
  }

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

  return select;
};

export const createSelectControlStory = (props: SelectControlStoryProps) => {
  const select = createSelectControl(props);
  select.setAttribute('aria-label', 'valikukasti näide');
  return select;
};

export interface IconInputProps extends FormControlStoryProps {
  leftIcon?: string;
  rightIcon?: string;
  isIconButton?: boolean;
  iconLabel?: string;
}

export const createIconInput = ({
  size,
  leftIcon,
  rightIcon,
  isIconButton,
  iconLabel,
  ...inputProps
}: IconInputProps) => {
  const createIcon = (iconName: string, position: 'left' | 'right') => {
    const icon = document.createElement(isIconButton ? 'button' : 'span');
    const iconClass = isIconButton ? 'v-form-control-icon-btn' : 'v-form-control-icon';
    icon.className = `material-icons ${iconClass} ${iconClass}--${position}`;
    icon.innerText = iconName;
    if (iconLabel) {
      icon.setAttribute('aria-label', iconLabel);
    } else {
      icon.setAttribute('aria-hidden', 'true');
    }
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
