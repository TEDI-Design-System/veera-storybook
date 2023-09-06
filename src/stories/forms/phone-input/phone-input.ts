import { FormControlStoryProps } from '../form-control/form-control';
import '@scss/forms/forms.scss';
import { EstonianFlag, countryOptions } from './countries';

export interface PhoneInputStoryProps extends FormControlStoryProps {}

export const createPhoneInput = ({
  size,
  placeholder = 'Sisesta tel. number',
}: PhoneInputStoryProps) => {
  const phoneInput = document.createElement('div');
  phoneInput.className = `v-phone-input v-phone-input--${size}`;

  const trigger = document.createElement('button');
  trigger.className = 'v-phone-input__country-select';
  trigger.ariaHasPopup = 'listbox';
  trigger.ariaExpanded = 'true';
  trigger.innerHTML = EstonianFlag;
  const dialCode = document.createTextNode('+372');
  trigger.appendChild(dialCode);
  const icon = document.createElement('span');
  icon.className = 'material-icons';
  icon.innerText = 'arrow_drop_down';
  icon.style.color = 'var(--v-inputs-icon-fill)';
  trigger.appendChild(icon);
  phoneInput.appendChild(trigger);

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = placeholder;
  input.className = 'v-phone-input__input';
  input.inputMode = 'tel';
  phoneInput.appendChild(input);

  const dropdown = document.createElement('div');
  dropdown.role = 'listbox';
  dropdown.className = 'v-dropdown';
  for (const opt of countryOptions) {
    const option = document.createElement('button');
    option.role = 'option';
    option.className = 'v-dropdown__option';
    option.innerHTML = opt.flag;
    const text = document.createTextNode(`${opt.name} (${opt.dial_code})`);
    option.appendChild(text);
    dropdown.appendChild(option);
  }
  phoneInput.appendChild(dropdown);

  return phoneInput;
};
