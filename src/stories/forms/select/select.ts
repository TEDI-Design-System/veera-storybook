import clsx from 'clsx';
import { FormControlStoryProps } from '../form-control/form-control';
import { createDropdown, createDropdownOption } from '../../dropdown/dropdown';
import { createIcon } from '../../utils';
import { createTag } from '../../components/tag/tag';

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
  text.className = clsx('v-select__text', { 'v-form-control__placeholder': !value });
  return text;
};

export const createSelect = ({
  size,
  status,
  placeholder = 'Select',
  value,
  options,
  disabled,
}: SelectStoryProps) => {
  let expanded = false;

  const select = document.createElement('div');
  select.className = 'v-select';

  const trigger = document.createElement('button');
  trigger.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: !!status,
  });
  trigger.setAttribute('role', 'combobox');
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', expanded.toString());
  trigger.disabled = !!disabled;

  trigger.appendChild(createCreateSelectTriggerText({ placeholder, value }));

  const triggerIcon = createIcon({ name: 'arrow_drop_down' });
  triggerIcon.classList.add('v-select__icon');
  trigger.appendChild(triggerIcon);

  select.appendChild(trigger);

  const optionList = options ?? ['Option 1', 'Option 2', 'Option 3'];
  const dropdown = createDropdown();
  dropdown.id = Math.random().toString();
  trigger.setAttribute('aria-controls', dropdown.id);
  trigger.setAttribute('aria-owns', dropdown.id);
  dropdown.hidden = !expanded;
  optionList.forEach((option, index) => {
    dropdown.appendChild(createDropdownOption({ label: option, selected: index === 1 }));
  });
  select.appendChild(dropdown);
  const firstOption = dropdown.querySelector('[role="option"]');
  firstOption?.classList.add('v-dropdown__option--focused');

  trigger.onclick = () => {
    expanded = !expanded;
    updateDropDown();
  };

  trigger.onblur = () => {
    expanded = false;
    updateDropDown();
  };

  const updateDropDown = () => {
    dropdown.hidden = !expanded;
    trigger.setAttribute('aria-expanded', expanded.toString());
    if (expanded) {
      select.classList.add('v-select--expanded');
      if (firstOption) {
        trigger.setAttribute('aria-activedescendant', firstOption.id);
      }
    } else {
      select.classList.remove('v-select--expanded');
      trigger.setAttribute('aria-activedescendant', '');
    }
  };

  return select;
};

export const createSelectStory = (props: SelectStoryProps) => {
  const select = createSelect(props);
  const combobox = select.querySelector('[role="combobox"]');
  combobox?.setAttribute('aria-label', 'Valikukast');

  return select;
};

const multiSelecOptions = [
  {
    label:
      'Esimene valik, mis on ühtlasi ka üsna pikk, et demonstreerida, kuidas kuvatakse mahukad väärtused',
    selected: true,
  },
  { label: 'Teine valik', selected: true },
  { label: 'Kolmas valik', selected: true },
  { label: 'Neljas valik' },
  { label: 'Viies valik' },
];

export const createMultiselect = ({ size, status, disabled }: SelectStoryProps) => {
  let expanded = false;

  const select = document.createElement('div');
  select.className = 'v-select v-select--multiselect';

  const trigger = document.createElement('div');
  trigger.tabIndex = 0;
  trigger.className = clsx('v-form-control', `v-form-control--${size}`, {
    [`v-form-control--${status}`]: status,
    'v-form-control--disabled': disabled,
  });
  trigger.setAttribute('role', 'combobox');
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', expanded.toString());
  trigger.setAttribute('aria-label', 'Mitmikvalik');

  const tagsContainer = document.createElement('div');
  tagsContainer.className = 'v-select__tags';
  trigger.setAttribute('aria-label', 'Valitud väärtused');
  multiSelecOptions
    .filter((opt) => opt.selected)
    .forEach((opt) => {
      const tag = createTag({ text: opt.label, closable: true });
      const closeBtn = tag.querySelector('button');
      if (closeBtn) {
        closeBtn.onclick = (e) => {
          e.stopPropagation();
        };
      }
      tagsContainer.appendChild(tag);
    });
  trigger.appendChild(tagsContainer);
  const triggerIcon = createIcon({ name: 'arrow_drop_down' });
  triggerIcon.classList.add('v-select__icon');
  trigger.appendChild(triggerIcon);

  select.appendChild(trigger);

  const dropdown = createDropdown();
  dropdown.id = Math.random().toString();
  dropdown.setAttribute('aria-multiselectable', 'true');
  trigger.setAttribute('aria-controls', dropdown.id);
  trigger.setAttribute('aria-owns', dropdown.id);
  dropdown.hidden = !expanded;
  multiSelecOptions.forEach(({ label, selected }) => {
    dropdown.appendChild(createDropdownOption({ label, selected, multiselect: true, size }));
  });
  select.appendChild(dropdown);
  const firstOption = dropdown.querySelector('[role="option"]');
  firstOption?.classList.add('v-dropdown__option--focused');

  trigger.onclick = () => {
    expanded = !expanded;
    updateDropDown();
  };

  trigger.onkeydown = (e) => {
    if (e.code === 'Space') {
      expanded = !expanded;
      updateDropDown();
    }
  };

  const updateDropDown = () => {
    dropdown.hidden = !expanded;
    trigger.setAttribute('aria-expanded', expanded.toString());
    if (expanded) {
      select.classList.add('v-select--expanded');
      if (firstOption) {
        trigger.setAttribute('aria-activedescendant', firstOption.id);
      }
    } else {
      select.classList.remove('v-select--expanded');
      trigger.setAttribute('aria-activedescendant', '');
    }
  };

  return select;
};
