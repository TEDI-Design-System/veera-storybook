import clsx from 'clsx';
import '@scss/forms/forms.scss';
import {
  createInputControl,
  createSelectControl,
  createTextAreaControl,
} from '../form-control/form-control';

interface FormRowProps {
  inputId: string;
  label: string;
  input: HTMLElement;
  helperText?: string;
  required?: boolean;
}

const createFormRow = ({ inputId, label, input, helperText, required }: FormRowProps) => {
  const formRow = document.createElement('div');
  formRow.className = 'v-form-row';

  const createHelperText = (text: string) => {
    const helperTextEl = document.createElement('span');
    helperTextEl.className = 'v-form-feedback';
    helperTextEl.innerText = text;
    return helperTextEl;
  };

  const forRowLabel = document.createElement('label');
  forRowLabel.className = clsx('v-form-row-label', { 'v-form-row-label--required': !!required });
  forRowLabel.setAttribute('for', inputId);
  forRowLabel.innerText = label;
  formRow.appendChild(forRowLabel);

  const formRowInput = document.createElement('div');
  formRowInput.className = 'v-form-row-input';
  formRowInput.appendChild(input);
  if (helperText) {
    formRowInput.appendChild(createHelperText(helperText));
  }
  formRow.appendChild(formRowInput);

  return formRow;
};

export interface FormLayoutStoryProps {
  direction: 'horizontal' | 'vertical';
  width: number;
  labelWidth: number;
  gap: number;
}

export const createFormLayout = ({ direction, width, labelWidth, gap }: FormLayoutStoryProps) => {
  const formGroup = document.createElement('div');
  formGroup.className = clsx('v-form-group', {
    'v-form-group--vertical': direction === 'vertical',
  });
  formGroup.style.setProperty('--v-form-width', `${width}px`);
  formGroup.style.setProperty('--v-form-label-width', `${labelWidth}px`);
  formGroup.style.setProperty('--v-form-gap', `${gap}px`);

  const textArea = createTextAreaControl({ size: 'md', placeholder: 'Textarea' });
  textArea.id = 'text-area';
  const textAreaRow = createFormRow({ label: 'Text area', inputId: textArea.id, input: textArea });
  formGroup.appendChild(textAreaRow);

  const textInput = createInputControl({ size: 'md', placeholder: 'Placeholder' });
  textInput.id = 'text-input';
  const textInputRow = createFormRow({
    label: 'Text input',
    inputId: textInput.id,
    input: textInput,
    helperText: 'Helper text',
    required: true,
  });
  formGroup.appendChild(textInputRow);

  const selectInput = createSelectControl({ size: 'md', placeholder: 'Placeholder' });
  selectInput.id = 'text-input';
  const selectInputRow = createFormRow({
    label: 'Select input',
    inputId: selectInput.id,
    input: selectInput,
  });
  formGroup.appendChild(selectInputRow);

  return formGroup;
};
