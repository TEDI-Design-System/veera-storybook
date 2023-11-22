import { createIconInput } from '../form-control/form-control';
import { createDropdown, createDropdownOption } from '../../dropdown/dropdown';

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
    isIconButton: true,
    iconLabel: 'Ava kuupäeva valija',
  });
  iconInput.style.width = '125px';

  if (customInput) {
    const textInput = iconInput.getElementsByTagName('input')[0];
    const inputWrapper = document.createElement('div');
    inputWrapper.className = textInput.className;
    textInput.replaceWith(inputWrapper);

    const hourInput = document.createElement('input');
    hourInput.className = 'v-timepicker__time-input';
    hourInput.placeholder = 'hh';
    inputWrapper.appendChild(hourInput);

    const separatorSymbol = document.createElement('span');
    separatorSymbol.innerText = ':';
    inputWrapper.appendChild(separatorSymbol);

    const minuteInput = document.createElement('input');
    minuteInput.className = 'v-timepicker__time-input';
    minuteInput.placeholder = 'mm';
    inputWrapper.appendChild(minuteInput);
  }

  timepicker.appendChild(iconInput);

  const panel = createDropdown({ position });
  timepicker.appendChild(panel);

  const hourOptions = document.createElement('div');
  hourOptions.className = 'v-timepicker__options-row';
  panel.appendChild(hourOptions);

  for (let hour = 0; hour < 24; hour++) {
    hourOptions.appendChild(createDropdownOption({ label: `${hour}`.padStart(2, '0') }));
  }

  const minuteOptions = document.createElement('div');
  minuteOptions.className = 'v-timepicker__options-row';
  panel.appendChild(minuteOptions);

  for (let minute = 0; minute < 60; minute++) {
    minuteOptions.appendChild(createDropdownOption({ label: `${minute}`.padStart(2, '0') }));
  }

  return timepicker;
};
