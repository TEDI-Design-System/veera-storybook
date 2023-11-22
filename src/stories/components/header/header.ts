import clsx from 'clsx';
import { createIcon, createLink, createLogo } from '../../utils';
import { createToggleWithLabel } from '../../forms/toggle/toggle';
import { createButton } from '../button/button';
import { createAutocomplete } from '../../forms/autocomplete/autocomplete';
import './header.stories.scss';

const links = ['Eraisik', 'Ettevõtja', 'Ametnik', 'Äriklient'];

const smallScreenActions = [
  {
    label: 'Otsing',
    icon: 'search',
    bp: 'md',
  },
  {
    label: 'Login sisse',
    icon: 'person',
    bp: 'lg',
  },
  {
    label: 'Menüü',
    icon: 'menu',
    bp: 'lg',
  },
];

const createTopBar = () => {
  const topBar = document.createElement('div');
  topBar.className = 'v-header__row v-header__row--with-grid v-header__row--top-bar';

  const leftColumn = document.createElement('div');
  leftColumn.className = 'v-header__grid-column v-hide-md-down v-gap-6';
  leftColumn.appendChild(createLink({ text: 'In English', size: 'sm' }));
  leftColumn.appendChild(createLink({ text: 'На русском', size: 'sm' }));
  topBar.appendChild(leftColumn);

  const centerColumn = document.createElement('nav');
  centerColumn.className = 'v-header__grid-column v-header__grid-column--center';
  links.forEach((linkText, index) => {
    const link = createLink({ text: linkText });
    link.className = clsx('v-header__menu-item', { 'v-header__menu-item--selected': index === 0 });
    centerColumn.appendChild(link);
  });
  topBar.appendChild(centerColumn);

  const rightColumn = document.createElement('div');
  rightColumn.className = 'v-header__grid-column v-header__grid-column--end v-hide-md-down';
  rightColumn.appendChild(createToggleWithLabel({ label: 'Tume režiim', size: 'sm' }));
  topBar.appendChild(rightColumn);

  return topBar;
};

const createSmallScreenActions = (container: HTMLElement) => {
  for (const action of smallScreenActions) {
    const button = document.createElement('button');
    button.className = `v-header__button v-hide-${action.bp}-up`;
    button.appendChild(createIcon({ name: action.icon, outlined: true }));
    button.appendChild(document.createTextNode(action.label));
    container.appendChild(button);
  }
};

const createMainRow = () => {
  const mainRow = document.createElement('div');
  mainRow.className = 'v-header__row v-header__row--with-grid';

  const startColumn = document.createElement('div');
  startColumn.className = 'v-header__grid-column';
  startColumn.appendChild(createLogo(true));
  mainRow.appendChild(startColumn);

  const centerColumn = document.createElement('div');
  centerColumn.className = 'v-header__grid-column v-header__grid-column--center v-hide-md-down';
  centerColumn.appendChild(createAutocomplete({ size: 'md', withButton: true }));
  mainRow.appendChild(centerColumn);

  const endColumn = document.createElement('div');
  endColumn.className = 'v-header__grid-column v-header__grid-column--end v-flex-shrink-0';
  const desktopLogIn = createButton({ label: 'Login sisse', variant: 'primary' });
  desktopLogIn.classList.add('v-hide-lg-down');
  endColumn.appendChild(desktopLogIn);
  createSmallScreenActions(endColumn);
  mainRow.appendChild(endColumn);

  return mainRow;
};

export const createHorizontalSeparator = () => {
  const separator = document.createElement('div');
  separator.className = 'v-header__hr';
  return separator;
};

export const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'v-header';

  header.appendChild(createTopBar());
  header.appendChild(createHorizontalSeparator());
  header.appendChild(createMainRow());

  return header;
};
