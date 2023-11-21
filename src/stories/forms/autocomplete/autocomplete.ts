import { createCloseButton } from '../../components/button/button';
import { createDropdown, createDropdownOption } from '../../dropdown/dropdown';
import { createIconInput } from '../form-control/form-control';

export interface AutocompleteStoryProps {
  size: 'sm' | 'md' | 'lg';
  withButton?: boolean;
  value?: string;
  opened?: boolean;
}

export const createAutocomplete = ({ size, withButton, value, opened }: AutocompleteStoryProps) => {
  const autocomplete = document.createElement('div');
  autocomplete.className = 'v-autocomplete';
  autocomplete.role = 'search';

  const input = createIconInput({
    size: size,
    rightIcon: 'search',
    placeholder: 'Otsing...',
    value,
    isIconButton: withButton,
  });
  const inputField = input.querySelector('input');
  if (inputField) {
    inputField.setAttribute('aria-expanded', 'true');
    inputField.role = 'searchbox';
  }
  const searchBtn = input.querySelector('button');
  if (searchBtn) {
    searchBtn.setAttribute('aria-label', 'Otsi');
    searchBtn.removeAttribute('aria-hidden');
  }
  autocomplete.appendChild(input);

  if (opened) {
    const suggestions = createDropdown();
    suggestions.setAttribute('aria-label', 'Soovitused');

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
  }

  return autocomplete;
};
