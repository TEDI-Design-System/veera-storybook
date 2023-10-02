import '@scss/components/header.scss';
import '@scss/forms/forms.scss';
import clsx from 'clsx';
import { createLink, createLogo } from '../../utils';
import { createSwitchWithLabel } from '../../forms/switch/switch';
import { createInputControl } from '../../forms/form-control/form-control';
import { createButton } from '../button/button';

const links = ['Eraisik', 'Ettevõtja', 'Ametnik', 'Äriklient'];

const createTopBar = () => {
  const topBar = document.createElement('div');
  topBar.className = 'v-header__row v-header__row--top-bar';

  const leftColumn = document.createElement('div');
  leftColumn.className = 'v-header__column';
  const link = createLink('Ligipääsetavus');
  link.className = 'v-header__menu-item';
  leftColumn.appendChild(link);
  topBar.appendChild(leftColumn);

  const centerColumn = document.createElement('nav');
  centerColumn.className = 'v-header__column v-header__column--center';
  links.forEach((linkText, index) => {
    const link = createLink(linkText);
    link.className = clsx('v-header__menu-item', { 'v-header__menu-item--selected': index === 0 });
    centerColumn.appendChild(link);
  });
  topBar.appendChild(centerColumn);

  const rightColumn = document.createElement('div');
  rightColumn.className = 'v-header__column v-header__column--end';
  rightColumn.appendChild(createSwitchWithLabel({ label: 'Dark mode', size: 'sm' }));
  topBar.appendChild(rightColumn);

  return topBar;
};

const createMainRow = () => {
  const mainRow = document.createElement('div');
  mainRow.className = 'v-header__row';

  const leftColumn = document.createElement('div');
  leftColumn.className = 'v-header__column';
  leftColumn.appendChild(createLogo());
  mainRow.appendChild(leftColumn);

  const centerColumn = document.createElement('nav');
  centerColumn.className = 'v-header__column v-header__column--center';
  centerColumn.appendChild(createInputControl({ size: 'md', placeholder: 'Otsi...' }));
  mainRow.appendChild(centerColumn);

  const rightColumn = document.createElement('div');
  const block1 = document.createElement('div');
  block1.className = 'v-header__block';
  block1.innerText = 'Suva tekst';
  rightColumn.appendChild(block1);

  const block2 = document.createElement('div');
  rightColumn.className = 'v-header__column v-header__column--end';
  block2.className = 'v-header__block';
  block2.appendChild(createButton({ label: 'Logi välja', variant: 'neutral' }));
  rightColumn.appendChild(block2);

  mainRow.appendChild(rightColumn);

  return mainRow;
};

export const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'v-header';

  header.appendChild(createTopBar());
  header.appendChild(createMainRow());

  return header;
};
