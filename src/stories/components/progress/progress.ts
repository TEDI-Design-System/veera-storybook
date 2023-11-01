import { createFormRow } from '../../forms/form-layout/form-layout';
import clsx from 'clsx';

export interface ProgressStoryProps {
  value: number;
  small?: boolean;
}

export const createProgress = ({ value = 30, small }: ProgressStoryProps) => {
  const progress = document.createElement('progress');
  progress.className = clsx('v-progress', { 'v-progress--sm': small });
  progress.max = 100;
  progress.value = value;
  progress.id = 'progress-bar';

  const endLabel = document.createElement('span');
  endLabel.innerText = `${value}%`;
  endLabel.className = 'v-progress__end-label';

  const wrapper = document.createElement('div');
  wrapper.className = 'v-flex v-gap-4 v-align-items-center';
  wrapper.appendChild(progress);
  wrapper.appendChild(endLabel);

  const formRow = createFormRow({
    inputId: 'progress-bar',
    label: 'Progress',
    helperText: 'Uploading',
    input: wrapper,
  });
  formRow.style.setProperty('--v-form-row-label-width', 'auto');
  return formRow;
};
