import { createContentFill } from '../../utils';
import { createFooter } from '../footer/footer';
import { createHeader } from '../header/header';
import { createHorizontalNavigation } from '../menu/horizontal-navigation';
import { createSideNavigation } from '../menu/side-navigation';

const createContent = () => {
  const container = document.createElement('main');
  container.className = 'v-container v-pt-7 v-pb-11';
  container.appendChild(createContentFill());
  return container;
};

export const createVerticalMenuLayout = () => {
  const layout = document.createElement('div');
  layout.className = 'v-vertical-menu-layout v-bg-surface-secondary';
  layout.appendChild(createHeader());
  layout.appendChild(createSideNavigation());
  layout.appendChild(createContent());
  layout.appendChild(createFooter());
  return layout;
};

export const createHorizontalMenuLayout = () => {
  const layout = document.createElement('div');
  layout.className = 'v-horizontal-menu-layout v-bg-surface-secondary';
  layout.appendChild(createHeader());
  layout.appendChild(createHorizontalNavigation());
  layout.appendChild(createContent());
  layout.appendChild(createFooter());
  return layout;
};
