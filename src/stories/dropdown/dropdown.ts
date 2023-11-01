import clsx from 'clsx';
import { createCheckboxWithLabel } from '../forms/checkbox/checkbox';
import { createIcon } from '../utils';

interface DropdownProps {
  position: 'top' | 'bottom';
}

export const createDropdown = (props?: DropdownProps) => {
  const dropdown = document.createElement('div');
  dropdown.role = 'listbox';
  dropdown.className = clsx('v-dropdown', {
    [`v-dropdown--${props?.position}`]: !!props?.position,
  });

  return dropdown;
};

interface DropdownOptionsProps {
  label: string | HTMLElement | DocumentFragment;
  selected?: boolean;
  multiselect?: boolean;
}

export const createDropdownOption = ({ label, selected, multiselect }: DropdownOptionsProps) => {
  const option = document.createElement(multiselect ? 'div' : 'button');
  option.role = 'option';
  option.className = clsx('v-dropdown__option', {
    'v-dropdown__option--selected': selected && !multiselect,
  });
  option.setAttribute('aria-selected', (!!selected).toString());

  if (multiselect) {
    option.appendChild(createCheckboxWithLabel({ checked: selected, label: label as string }));
  } else {
    if (typeof label === 'string') {
      option.appendChild(document.createTextNode(label));
    } else {
      option.appendChild(label);
    }
    if (selected) {
      const checkIcon = createIcon({ name: 'check' });
      checkIcon.classList.add('v-ml-auto');
      option.appendChild(checkIcon);
    }
  }

  return option;
};
