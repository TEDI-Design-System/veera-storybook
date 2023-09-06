import '@scss/forms/forms.scss';
import {
  FormControlStoryProps,
  createIconInput,
  createInputControl,
} from '../form-control/form-control';
import clsx from 'clsx';

export interface InputGroupProps extends FormControlStoryProps {
  startAddon: string;
  endAddon: string;
}

export const createInputGroup = ({
  startAddon,
  endAddon,
  size,
  disabled,
  ...inputProps
}: InputGroupProps) => {
  const group = document.createElement('div');
  group.className = clsx('v-input-group', `v-input-group--${size}`, {
    'v-input-group--disabled': !!disabled,
  });

  const createAddon = (text: string) => {
    const addon = document.createElement('div');
    addon.className = 'v-input-addon';
    addon.innerText = text;
    return addon;
  };

  if (startAddon) {
    group.appendChild(createAddon(startAddon));
  }

  const input = createInputControl(inputProps);
  group.appendChild(input);

  if (endAddon) {
    group.appendChild(createAddon(endAddon));
  }

  return group;
};

export const createInputGroupWithIcons = ({
  startAddon,
  endAddon,
  size,
  disabled,
  ...inputProps
}: InputGroupProps) => {
  const group = document.createElement('div');
  group.className = clsx('v-input-group', `v-input-group--${size}`, {
    'v-input-group--disabled': !!disabled,
  });

  const createAddon = (text: string) => {
    const addon = document.createElement('div');
    addon.className = 'v-input-addon';
    addon.innerText = text;
    return addon;
  };

  if (startAddon) {
    group.appendChild(createAddon(startAddon));
  }

  const iconInput = createIconInput({
    ...inputProps,
    leftIcon: 'search',
    rightIcon: 'agriculture',
  });
  group.appendChild(iconInput);

  if (endAddon) {
    group.appendChild(createAddon(endAddon));
  }

  return group;
};
