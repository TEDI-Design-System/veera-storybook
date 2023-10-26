import clsx from 'clsx';
import { FormControlStoryProps } from '../form-control/form-control';
import '@scss/forms/forms.scss';
import { createDropdown, createDropdownOption } from '../../dropdown/dropdown';
import { createIcon } from '../../utils';

export interface SelectStoryProps extends FormControlStoryProps {
  options?: string[];
}

const createCreateSelectTriggerText = ({
  value,
  placeholder,
}: {
  value?: string;
  placeholder: string;
  options?: { text: string; value: string }[];
}) => {
  const text = document.createElement('span');
  text.innerText = value ? value : placeholder;
  text.className = clsx('v-select__trigger-text', { 'v-form-control__placeholder': !value });
  return text;
};

export const createSelect = ({
  size,
  status,
  placeholder = 'Select',
  value,
  options,
}: SelectStoryProps) => {
  let expanded = false;

  const select = document.createElement('div');
  select.className = 'v-select';

  const trigger = document.createElement('button');
  trigger.className = clsx('v-form-control', 'v-select__trigger', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  trigger.ariaHasPopup = 'listbox';
  trigger.setAttribute('aria-expanded', expanded.toString());

  trigger.appendChild(createCreateSelectTriggerText({ placeholder, value }));

  const triggerIcon = createIcon({ name: 'arrow_drop_down' });
  triggerIcon.classList.add('v-select__trigger-icon');
  trigger.appendChild(triggerIcon);

  select.appendChild(trigger);

  const optionList = options ?? ['Option 1', 'Option 2', 'Option 3'];
  const dropdown = createDropdown();
  dropdown.id = Math.random().toString();
  trigger.setAttribute('aria-controls', dropdown.id);
  dropdown.hidden = !expanded;
  optionList.forEach((option, index) => {
    dropdown.appendChild(createDropdownOption({ label: option, selected: index === 1 }));
  });
  select.appendChild(dropdown);

  trigger.onclick = () => {
    expanded = !expanded;
    dropdown.hidden = !expanded;
    trigger.setAttribute('aria-expanded', expanded.toString());
  };

  return select;
};
