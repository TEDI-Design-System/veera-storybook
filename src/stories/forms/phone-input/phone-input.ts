import { FormControlStoryProps } from '../form-control/form-control';
import { EstonianFlag, countryOptions } from './countries';
import { createDropdown, createDropdownOption } from '../../dropdown/dropdown';
import { createIcon } from '../../utils';

export interface PhoneInputStoryProps extends FormControlStoryProps {}

export const createPhoneInput = ({
  size,
  placeholder = 'Sisesta tel. number',
}: PhoneInputStoryProps) => {
  const phoneInput = document.createElement('div');
  phoneInput.className = `v-phone-input v-phone-input--${size}`;

  const trigger = document.createElement('button');
  trigger.className = 'v-form-control v-phone-input__country-select';
  trigger.setAttribute('role', 'combobox');
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'true');
  trigger.setAttribute('aria-label', 'Vali suunakood');
  const flagContainer = document.createElement('div');
  flagContainer.className = 'flag-container';
  flagContainer.innerHTML = EstonianFlag;
  trigger.appendChild(flagContainer);
  const dialCode = document.createTextNode('+372');
  trigger.appendChild(dialCode);
  const icon = createIcon({ name: 'arrow_drop_up' });
  icon.style.color = 'var(--v-inputs-icon-fill)';
  trigger.appendChild(icon);
  phoneInput.appendChild(trigger);

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.className = 'v-phone-input__input v-form-control';
  input.inputMode = 'tel';
  input.setAttribute('aria-label', 'telefoni number');
  phoneInput.appendChild(input);

  const dropdown = createDropdown();
  dropdown.id = Math.random().toString();
  trigger.setAttribute('aria-controls', dropdown.id);
  for (const opt of countryOptions) {
    const template = document.createElement('template');
    const flagContainer = document.createElement('div');
    flagContainer.className = 'flag-container';
    flagContainer.innerHTML = opt.flag;
    template.content.appendChild(flagContainer);
    template.content.appendChild(document.createTextNode(`${opt.name} (${opt.dial_code})`));
    const option = createDropdownOption({
      label: template.content,
      selected: opt.dial_code === '+372',
    });
    dropdown.appendChild(option);
  }
  phoneInput.appendChild(dropdown);

  return phoneInput;
};
