import clsx from 'clsx';
import { createDaysGrid, createDaysList, createPanelHeader } from './datepicker.helpers';
import { createIconInput } from '../form-control/form-control';

export interface DatepickerDayStoryProps {
  day?: number;
  disabled?: boolean;
  muted?: boolean;
  selected?: boolean;
  today?: boolean;
  weekend?: boolean;
  label?: string;
}

export const createDatepickerDay = ({
  day = 10,
  disabled,
  muted,
  selected,
  today,
  weekend,
  label,
}: DatepickerDayStoryProps) => {
  const datepickerDay = document.createElement('button');
  datepickerDay.className = clsx('v-datepicker__day', {
    'v-datepicker__day--muted': muted,
    'v-datepicker__day--selected': selected,
    'v-datepicker__day--today': today,
    'v-datepicker__day--weekend': weekend,
  });
  datepickerDay.disabled = !!disabled;
  datepickerDay.innerText = `${day}`;

  datepickerDay.style.height = '40px';
  datepickerDay.style.width = '40px';
  datepickerDay.setAttribute('aria-selected', selected ? 'true' : 'false');

  if (today) {
    datepickerDay.setAttribute('aria-current', 'date');
  }

  if (label) {
    datepickerDay.setAttribute('aria-label', label);
  }

  return datepickerDay;
};

export interface DatepickerStoryProps {
  position: 'top' | 'bottom';
}

export const createDatepicker = ({ position }: DatepickerStoryProps) => {
  const datepicker = document.createElement('div');
  datepicker.className = 'v-datepicker';

  const input = createIconInput({
    size: 'md',
    rightIcon: 'calendar_month',
    placeholder: 'pp.kk.aaaa',
    isIconButton: true,
    iconLabel: 'Ava kuupäeva valija',
  });
  input.style.width = '256px';
  datepicker.appendChild(input);

  const panel = document.createElement('div');
  panel.className = clsx('v-datepicker__panel', { 'v-datepicker__panel--top': position === 'top' });
  datepicker.appendChild(panel);

  const panelHeader = createPanelHeader();
  panel.appendChild(panelHeader);

  const daysList = createDaysList();
  panel.appendChild(daysList);

  const daysGrid = createDaysGrid();
  panel.appendChild(daysGrid);

  return datepicker;
};
