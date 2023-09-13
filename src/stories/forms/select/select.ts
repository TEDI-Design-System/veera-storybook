import clsx from 'clsx';
import { FormControlStoryProps } from '../form-control/form-control';
import '@scss/forms/forms.scss';

export interface SelectStoryProps extends FormControlStoryProps {}

export const createSelect = ({ size, status, placeholder = 'Select' }: SelectStoryProps) => {
  let expanded = false;

  const select = document.createElement('div');
  select.className = 'v-select';

  const trigger = document.createElement('button');
  trigger.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  trigger.ariaHasPopup = 'listbox';
  trigger.setAttribute('aria-expanded', expanded.toString());
  const placeholderEl = document.createElement('span');
  placeholderEl.innerText = placeholder;
  placeholderEl.className = 'v-form-control__placeholder';
  trigger.appendChild(placeholderEl);
  select.appendChild(trigger);

  const options = ['Option 1', 'Option 2', 'Option 3'];
  const dropdown = document.createElement('div');
  dropdown.hidden = !expanded;
  dropdown.role = 'listbox';
  dropdown.className = 'v-dropdown';
  for (const opt of options) {
    const option = document.createElement('button');
    option.role = 'option';
    option.className = 'v-dropdown__option';
    option.innerText = opt;
    dropdown.appendChild(option);
  }
  select.appendChild(dropdown);

  trigger.onclick = () => {
    expanded = !expanded;
    dropdown.hidden = !expanded;
    trigger.setAttribute('aria-expanded', expanded.toString());
  };

  return select;
};
