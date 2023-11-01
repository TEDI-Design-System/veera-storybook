import { createCloseButton } from '../../components/button/button';
import { createDropdown, createDropdownOption } from '../../dropdown/dropdown';
import { createIconInput } from '../form-control/form-control';

export interface AutocompleteStoryProps {
  size: 'sm' | 'md' | 'lg';
  withButton?: boolean;
}

export const createAutocomplete = ({ size, withButton }: AutocompleteStoryProps) => {
  const autocomplete = document.createElement('div');
  autocomplete.className = 'v-autocomplete';
  autocomplete.role = 'search';

  const input = createIconInput({
    size: size,
    rightIcon: 'search',
    placeholder: 'Otsing...',
    value: 'Vää',
    isIconButton: withButton,
  });
  const inputField = input.querySelector('input');
  if (inputField) {
    inputField.setAttribute('aria-expanded', 'true');
    inputField.role = 'searchbox';
  }
  input.querySelector('button')?.setAttribute('aria-label', 'Otsi');
  autocomplete.appendChild(input);

  const suggestions = createDropdown();

  for (let index = 1; index < 6; index++) {
    const template = document.createElement('template');
    template.innerHTML = `Vää<b>rtus ${index}</b>`;
    const option = createDropdownOption({
      label: template.content,
    });
    suggestions.appendChild(option);
  }

  autocomplete.appendChild(suggestions);
  autocomplete.appendChild(createCloseButton('Tühjenda otsingukast', true));

  return autocomplete;
};
