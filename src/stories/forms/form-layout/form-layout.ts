import clsx from 'clsx';
import '@scss/forms/forms.scss';
import {
  createInputControl,
  createSelectControl,
  createTextAreaControl,
} from '../form-control/form-control';
import { createFileUpload } from '../file-upload/file-upload';

interface FormRowProps {
  inputId: string;
  label: string;
  input: HTMLElement;
  helperText?: string;
  required?: boolean;
  readonly?: boolean;
}

export const createFormRow = ({
  inputId,
  label,
  input,
  helperText,
  required,
  readonly,
}: FormRowProps) => {
  const formRow = document.createElement('div');
  formRow.className = 'v-form-row';

  const createHelperText = (text: string) => {
    const helperTextEl = document.createElement('span');
    helperTextEl.id = Math.random().toString();
    input.setAttribute('aria-describedby', helperTextEl.id);
    helperTextEl.className = 'v-form-feedback';
    helperTextEl.innerText = text;
    return helperTextEl;
  };

  const formRowLabel = document.createElement('label');
  formRowLabel.className = clsx('v-form-row-label', { 'v-form-row-label--required': !!required });
  formRowLabel.setAttribute('for', inputId);
  formRowLabel.innerText = label;
  formRow.appendChild(formRowLabel);

  const formRowInput = document.createElement('div');
  formRowInput.className = clsx('v-form-row-input', { 'v-form-row-input--readonly': readonly });
  formRowInput.appendChild(input);
  if (helperText) {
    formRowInput.appendChild(createHelperText(helperText));
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
    label: 'Text input',
    inputId: textInput.id,
    input: textInput,
    helperText: 'Helper text',
    required: true,
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

  formGroup.appendChild(createSelectInputRow());

  formGroup.appendChild(createFileUploadRow());

  formGroup.appendChild(createReadOnlyRow());

  return formGroup;
};
