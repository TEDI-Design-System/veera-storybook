import clsx from 'clsx';
import {
  createInputControl,
  createSelectControl,
  createTextAreaControl,
} from '../form-control/form-control';
import { createFileUpload } from '../file-upload/file-upload';
import { createInputGroup } from '../input-group/input-group';
import { createCheckboxWithLabel } from '../checkbox/checkbox';

interface FormRowProps {
  inputId?: string;
  label: string;
  input: HTMLElement;
  helperText?: string;
  required?: boolean;
  readonly?: boolean;
  status?: 'error' | 'success';
  isFieldset?: boolean;
}

export const createFormRow = ({
  inputId,
  label,
  input,
  helperText,
  required,
  readonly,
  status,
  isFieldset,
}: FormRowProps) => {
  const formRow = document.createElement(isFieldset ? 'fieldset' : 'div');
  formRow.className = 'v-form-row';

  const createHelperText = (text: string, status?: 'error' | 'success') => {
    const helperTextEl = document.createElement('span');
    helperTextEl.id = Math.random().toString();
    input.setAttribute('aria-labelledby', helperTextEl.id);
    helperTextEl.className = clsx('v-form-feedback', { [`v-form-feedback--${status}`]: status });
    helperTextEl.innerText = text;
    return helperTextEl;
  };

  const formRowLabel = document.createElement(isFieldset ? 'legend' : 'label');
  formRowLabel.className = clsx('v-form-row-label', { 'v-form-row-label--required': !!required });
  if (inputId) {
    formRowLabel.setAttribute('for', inputId);
  }
  formRowLabel.innerText = label;
  formRow.appendChild(formRowLabel);

  const formRowInput = document.createElement('div');
  formRowInput.className = clsx('v-form-row-input', { 'v-form-row-input--readonly': readonly });
  formRowInput.appendChild(input);
  if (helperText) {
    formRowInput.appendChild(createHelperText(helperText, status));
  }
  formRow.appendChild(formRowInput);

  return formRow;
};

const createTextAreaRow = () => {
  const textArea = createTextAreaControl({ size: 'md', placeholder: 'Textarea' });
  textArea.id = 'text-area';
  return createFormRow({ label: 'Text area', inputId: textArea.id, input: textArea });
};

const createTextInputRow = () => {
  const textInput = createInputControl({ size: 'md', placeholder: 'Placeholder' });
  textInput.id = 'text-input';
  textInput.required = true;
  return createFormRow({
    label: 'Tekstivälja näidis',
    inputId: textInput.id,
    input: textInput,
    helperText: 'Helper text',
    required: true,
  });
};

const createErrorInputRow = () => {
  const textInput = createInputControl({ size: 'md', placeholder: 'Placeholder', status: 'error' });
  textInput.id = 'error-input';
  return createFormRow({
    label: 'Veaga väli',
    inputId: textInput.id,
    input: textInput,
    helperText: 'Vigane sisend',
    status: 'error',
  });
};

const createSuccessInputRow = () => {
  const textInput = createInputControl({
    size: 'md',
    placeholder: 'Placeholder',
    status: 'success',
  });
  textInput.id = 'success-input';
  return createFormRow({
    label: 'Edukas väli',
    inputId: textInput.id,
    input: textInput,
    helperText: 'Õige sisend',
    status: 'success',
  });
};

const createInputGroupRow = () => {
  const inputGroup = createInputGroup({
    size: 'md',
    placeholder: 'Placeholder',
    status: 'error',
    startAddon: '%',
    endAddon: '%',
  });
  const id = 'input-group';
  const input = inputGroup.querySelector('input');
  if (input) {
    input.id = id;
  }
  return createFormRow({
    label: 'Väljade grupi näide',
    inputId: id,
    input: inputGroup,
    helperText: 'Vigane sisend',
    status: 'error',
  });
};

const createSelectInputRow = () => {
  const selectInput = createSelectControl({ size: 'md', placeholder: 'Placeholder' });
  selectInput.id = 'select-input';
  return createFormRow({
    label: 'Native select input',
    inputId: selectInput.id,
    input: selectInput,
  });
};

const createFileUploadRow = () => {
  const fileUpload = createFileUpload({
    label: 'Lohistage failid siia või valige kettalt',
    id: 'file-upload-id',
  });
  return createFormRow({
    label: 'File upload',
    inputId: 'file-upload-id',
    input: fileUpload,
  });
};

const createReadOnlyRow = () => {
  const readonlyValue = document.createElement('span');
  readonlyValue.innerText = 'Read only value';
  readonlyValue.id = 'read-only-value';
  return createFormRow({
    label: 'Ainult loetava väärtuse näide',
    inputId: readonlyValue.id,
    input: readonlyValue,
    readonly: true,
  });
};

const createCheckboxRow = () => {
  const checkboxesContainer = document.createElement('div');
  checkboxesContainer.className = 'v-flex v-flex-column v-gap-6';
  for (let i = 1; i < 6; i++) {
    checkboxesContainer.appendChild(createCheckboxWithLabel({ label: `Valik ${i}` }));
  }
  return createFormRow({
    label: 'Mitmikvalik märkmeruutudega',
    input: checkboxesContainer,
    helperText: 'Vali vähemalt üks',
    isFieldset: true,
  });
};

export interface FormLayoutStoryProps {
  direction: 'horizontal' | 'vertical';
  size: 'sm' | 'md' | 'lg';
}

export const createFormLayout = ({ direction, size = 'md' }: FormLayoutStoryProps) => {
  const formGroup = document.createElement('div');
  formGroup.className = clsx('v-form-group', `v-form-group--${size}`, {
    'v-form-group--vertical': direction === 'vertical',
  });

  formGroup.appendChild(createTextAreaRow());

  formGroup.appendChild(createTextInputRow());

  formGroup.appendChild(createErrorInputRow());

  formGroup.appendChild(createSuccessInputRow());

  formGroup.appendChild(createInputGroupRow());

  formGroup.appendChild(createSelectInputRow());

  formGroup.appendChild(createFileUploadRow());

  formGroup.appendChild(createReadOnlyRow());

  formGroup.appendChild(createCheckboxRow());

  return formGroup;
};
