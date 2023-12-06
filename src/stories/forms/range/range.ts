import { createFormRow } from '../form-layout/form-layout';
import { createInputGroup } from '../input-group/input-group';

export interface RangeProps {
  min?: number;
  max?: number;
  disabled?: boolean;
}
export const createRangeSlider = ({ disabled, min = 0, max = 100 }: RangeProps) => {
  const sliderGroup = document.createElement('div');
  sliderGroup.className = 'v-range-group';

  const sliderLabelGroup = document.createElement('div');
  sliderLabelGroup.className = 'v-flex v-align-items-center v-gap-4 v-flex-grow-1';
  sliderLabelGroup.appendChild(document.createTextNode('0%'));

  const rangeSlider = document.createElement('input');
  rangeSlider.type = 'range';
  rangeSlider.className = 'v-range';
  rangeSlider.disabled = !!disabled;
  rangeSlider.min = `${min}`;
  rangeSlider.max = `${max}`;
  rangeSlider.value = rangeSlider.min;

  rangeSlider.addEventListener('input', (event: Event) => {
    const slider = event.target as HTMLInputElement;
    const value = Number(slider.value);
    const min = Number(slider.min);
    const max = Number(slider.max || 100);
    const range = max - min;
    const completed = range - (max - value);
    const progress = (completed / range) * 100;

    slider.style.setProperty('--v-range-progress', `${progress}%`);
  });

  rangeSlider.setAttribute('aria-label', 'liugurväli näide');
  sliderLabelGroup.appendChild(rangeSlider);

  sliderLabelGroup.appendChild(document.createTextNode('100%'));

  sliderGroup.appendChild(sliderLabelGroup);
  const inputGroup = createInputGroup({
    value: '50',
    endAddon: '%',
    size: 'md',
    ariaLabel: 'liugurvälja väärtus',
  });
  const valueInput = inputGroup.querySelector('input')!;
  valueInput.id = `range-value-${Math.random()}`;
  const inputAddon = inputGroup.querySelector('.v-input-addon')!;
  inputAddon.id = `addon-${Math.random()}`;
  valueInput.setAttribute('aria-describedby', inputAddon.id);
  sliderGroup.appendChild(inputGroup);

  const row = createFormRow({ label: 'Liugur', input: sliderGroup, inputId: valueInput.id });
  row.classList.add('v-form-row--vertical');
  const label = row.querySelector('label')!;
  label.id = `label-${Math.random()}`;

  valueInput.setAttribute('aria-labelledby', `${label.id} ${inputAddon.id}`);

  return row;
};
