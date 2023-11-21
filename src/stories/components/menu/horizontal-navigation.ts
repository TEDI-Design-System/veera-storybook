import { horizontalNavItems } from './menu-items';
import { createIcon } from '../../utils';

export interface HorizontalNavItem {
  label: string;
  icon?: string;
  children: SubmenuItem[];
}

interface SubmenuItem {
  name: string;
  children: string[];
}

const createSubMenuItemBlock = (item: SubmenuItem) => {
  const block = document.createElement('div');
  block.className = 'v-horizontal-navigation__submenu-block';

  const blockHeader = document.createElement('div');
  blockHeader.className = 'v-horizontal-navigation__submenu-block-header';
  const icon = createIcon({ name: 'dashboard', outlined: true });
  icon.classList.add('v-icon--sm');
  blockHeader.appendChild(icon);
  blockHeader.appendChild(document.createTextNode(item.name));
  block.appendChild(blockHeader);

  const list = document.createElement('ul');
  for (const link of item.children) {
    const item = document.createElement('li');
    const itemLink = document.createElement('a');
    itemLink.className = 'v-horizontal-navigation__submenu-item';
    itemLink.href = '#';
    itemLink.innerText = link;
    item.appendChild(itemLink);

    list.appendChild(item);
  }
  block.appendChild(list);

  return block;
};

const removeMenu = () => {
  const panel = document.getElementById('menu-panel');
  panel?.remove();
};

const createMenuPanel = (openedItem: HorizontalNavItem) => {
  const panel = document.createElement('div');
  panel.className = 'v-horizontal-navigation__panel';
  panel.id = 'menu-panel';

  for (const item of openedItem.children) {
    panel.appendChild(createSubMenuItemBlock(item));
  }

  document.getElementById('horizontal-menu')?.appendChild(panel);
};

const createMenuItem = (item: HorizontalNavItem) => {
  let selected = false;
  const menuItem = document.createElement('button');
  menuItem.className = 'v-horizontal-navigation__item';
  if (item.icon) {
    const icon = createIcon({ name: item.icon });
    icon.classList.add('v-icon--sm');
    menuItem.appendChild(icon);
  }
  menuItem.appendChild(document.createTextNode(item.label));
  const expandIcon = createIcon({ name: 'expand_more' });
  expandIcon.classList.add('v-horizontal-navigation__expand-icon');
  menuItem.appendChild(expandIcon);
  menuItem.onclick = () => {
    selected = !selected;
    if (selected) {
      createMenuPanel(item);
      menuItem.classList.add('v-horizontal-navigation__item--selected');
    } else {
      removeMenu();
      menuItem.classList.remove('v-horizontal-navigation__item--selected');
    }
    menuItem.setAttribute('aria-expanded', selected.toString());
  };
  return menuItem;
};

const createMenuBar = () => {
  const menuBar = document.createElement('nav');
  menuBar.className = 'v-horizontal-navigation__menu-bar';
  const list = document.createElement('ul');
  for (const item of horizontalNavItems) {
    const listItem = document.createElement('li');
    listItem.appendChild(createMenuItem(item));
    list.appendChild(listItem);
  }
  menuBar.appendChild(list);
  return menuBar;
};

export const createHorizontalNavigation = () => {
  const horizontalMenu = document.createElement('div');
  horizontalMenu.className = 'v-horizontal-navigation';
  horizontalMenu.id = 'horizontal-menu';
  horizontalMenu.appendChild(createMenuBar());

  return horizontalMenu;
};
