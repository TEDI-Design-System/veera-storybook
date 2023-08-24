import { createButton } from '../../components/v-button/v-button';
import { createSelectControl } from '../form-control/form-control';
import { createDatepickerDay } from './datepicker';

export const createDaysList = () => {
  const daysList = document.createElement('div');
  daysList.className = 'v-datepicker__days-list';
  ['E', 'T', 'K', 'N', 'R', 'L', 'P'].forEach((name) => {
    const dayName = document.createElement('span');
    dayName.innerText = name;
    if (['L', 'P'].includes(name)) {
      dayName.className = 'v-datepicker__day--weekend';
    }
    daysList.appendChild(dayName);
  });
  return daysList;
};

export const createDaysGrid = () => {
  const daysGrid = document.createElement('div');
  daysGrid.className = 'v-datepicker__days-grid';

  daysGrid.appendChild(createDatepickerDay({ day: 31, muted: true }));
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  for (const day of days) {
    const weekend = [5, 6].includes(day % 7);
    const selected = day === 24;
    const today = day === 24;
    daysGrid.appendChild(createDatepickerDay({ day, weekend, today, selected }));
  }
  const nextMonthDays = Array.from({ length: 3 }, (_, i) => i + 1);
  for (const day of nextMonthDays) {
    daysGrid.appendChild(createDatepickerDay({ day, muted: true, weekend: [2, 3].includes(day) }));
  }
  return daysGrid;
};

export const createPanelHeader = () => {
  const panelHeader = document.createElement('div');
  panelHeader.className = 'v-datepicker__panel-header';
  const prevButton = createButton({
    label: 'chevron_left',
    iconOnly: true,
    size: 'sm',
    variant: 'neutral',
  });
  panelHeader.appendChild(prevButton);

  const monthOptions = [
    'jaanuar',
    'veebruar',
    'märts',
    'aprill',
    'mai',
    'juuni',
    'juuli',
    'august',
    'september',
    'oktoober',
    'november',
    'detsember',
  ].map((month) => ({ text: month, value: month }));
  const monthSelect = createSelectControl({ size: 'sm', options: monthOptions });
  panelHeader.appendChild(monthSelect);

  const yearOptions = Array.from({ length: 64 }, (_, i) => `${i + 1960}`).map((year) => ({
    text: year,
    value: year,
  }));
  const yearSelect = createSelectControl({ size: 'sm', options: yearOptions });
  panelHeader.appendChild(yearSelect);

  const nextButton = createButton({
    label: 'chevron_right',
    iconOnly: true,
    size: 'sm',
    variant: 'neutral',
  });
  panelHeader.appendChild(nextButton);

  return panelHeader;
};
