import '@scss/forms/forms.scss';
import clsx from 'clsx';
import { createIconInput } from '../form-control/form-control';

export interface TimepickerStoryProps {
  position: 'top' | 'bottom';
  customInput?: boolean;
}

export const createTimepicker = ({ position, customInput }: TimepickerStoryProps) => {
  const timepicker = document.createElement('div');
  timepicker.className = 'v-timepicker';

  const iconInput = createIconInput({
    size: 'md',
    rightIcon: 'calendar_month',
    placeholder: 'hh:mm',
  });
  iconInput.style.width = '125px';

  if (customInput) {
    const textInput = iconInput.getElementsByTagName('input')[0];
    const inputWrapper = document.createElement('div');
    inputWrapper.className = textInput.className;
    textInput.replaceWith(inputWrapper);

    const onFocus = () => {
      inputWrapper.classList.add('v-form-control--focus');
    };

    const onBlur = () => {
      inputWrapper.classList.remove('v-form-control--focus');
    };

    const hourInput = document.createElement('input');
    hourInput.className = 'v-timepicker__time-input';
    hourInput.placeholder = 'hh';
    hourInput.onfocus = onFocus;
    hourInput.onblur = onBlur;
    inputWrapper.appendChild(hourInput);

    const separatorSymbol = document.createElement('span');
    separatorSymbol.innerText = ':';
    inputWrapper.appendChild(separatorSymbol);

    const minuteInput = document.createElement('input');
    minuteInput.className = 'v-timepicker__time-input';
    minuteInput.placeholder = 'mm';
    minuteInput.onfocus = onFocus;
    minuteInput.onblur = onBlur;
    inputWrapper.appendChild(minuteInput);
  }

  timepicker.appendChild(iconInput);

  const panel = document.createElement('div');
  panel.className = clsx('v-timepicker__panel', { 'v-timepicker__panel--top': position === 'top' });
  timepicker.appendChild(panel);

  const hoursHeader = document.createElement('div');
  hoursHeader.className = 'v-timepicker__panel-header';
  hoursHeader.innerText = 'Tunnid';
  panel.appendChild(hoursHeader);

  const minutesHeader = document.createElement('div');
  minutesHeader.className = 'v-timepicker__panel-header';
  minutesHeader.innerText = 'Minutid';
  panel.appendChild(minutesHeader);

  const hourOptions = document.createElement('div');
  hourOptions.className = 'v-timepicker__panel-options';
  panel.appendChild(hourOptions);

  for (let hour = 0; hour < 24; hour++) {
    const hourOption = document.createElement('button');
    hourOption.className = 'v-timepicker__option';
    hourOption.innerText = `${hour}`.padStart(2, '0');
    hourOptions.appendChild(hourOption);
  }

  const minuteOptions = document.createElement('div');
  minuteOptions.className = 'v-timepicker__panel-options';
  panel.appendChild(minuteOptions);

  for (let minute = 0; minute < 60; minute++) {
    const minuteOption = document.createElement('button');
    minuteOption.className = 'v-timepicker__option';
    minuteOption.innerText = `${minute}`.padStart(2, '0');
    minuteOptions.appendChild(minuteOption);
  }

  return timepicker;
};
