import '@scss/components/dropdown.scss';
import '@scss/utilities/spacing.scss';
import clsx from 'clsx';
import { createCheckbox } from '../forms/checkbox/checkbox';
import { createIcon } from '../utils';

interface DropdownProps {
  position: 'top' | 'bottom';
  multiselect?: boolean;
}

export const createDropdown = (props?: DropdownProps) => {
  const dropdown = document.createElement('div');
  dropdown.role = 'listbox';
  dropdown.className = clsx('v-dropdown', {
    [`v-dropdown--${props?.position}`]: !!props?.position,
    'v-dropdown--multiselect': props?.multiselect,
  });

  return dropdown;
};

interface DropdownOptionsProps {
  label: string | HTMLElement | DocumentFragment;
  selected?: boolean;
  multiselect?: boolean;
}

export const createDropdownOption = ({ label, selected, multiselect }: DropdownOptionsProps) => {
  const option = document.createElement('button');
  option.role = 'option';
  option.className = clsx('v-dropdown__option', { 'v-dropdown__option--selected': selected });
  option.setAttribute('aria-selected', (!!selected).toString());

  if (multiselect) {
    option.appendChild(createCheckbox({ checked: selected }));
  }

  if (typeof label === 'string') {
    option.appendChild(document.createTextNode(label));
  } else {
    option.appendChild(label);
  }

  if (!multiselect && selected) {
    const checkIcon = createIcon({ name: 'check' });
    checkIcon.classList.add('v-ml-auto');
    option.appendChild(checkIcon);
  }

  return option;
};
