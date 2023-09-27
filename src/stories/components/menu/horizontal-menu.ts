import '@scss/components/menu.scss';
import '@scss/components/icon.scss';
// import { createIcon } from '../../utils';
// import clsx from 'clsx';
import { horizontalMenuItems } from './menu-items';
import { createIcon } from '../../utils';

export interface HorizontalMenuItem {
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
  block.className = 'v-horizontal-menu__submenu-block';

  const blockHeader = document.createElement('div');
  blockHeader.className = 'v-horizontal-menu__submenu-block-header';
  const icon = createIcon({ name: 'dashboard', outlined: true });
  icon.classList.add('v-icon--sm');
  blockHeader.appendChild(icon);
  blockHeader.appendChild(document.createTextNode(item.name));
  block.appendChild(blockHeader);

  for (const link of item.children) {
    const itemLink = document.createElement('a');
    itemLink.className = 'v-horizontal-menu__submenu-item';
    itemLink.href = '#';
    itemLink.innerText = link;

    block.appendChild(itemLink);
  }

  return block;
};

const createSubmenuColumn = (items: SubmenuItem[]) => {
  const submenuColumn = document.createElement('div');
  submenuColumn.className = 'v-horizontal-menu__submenu-column';

  for (const item of items) {
    submenuColumn.appendChild(createSubMenuItemBlock(item));
  }

  return submenuColumn;
};

const createMenuPanel = (openedItem: HorizontalMenuItem) => {
  const oldPanel = document.getElementById('menu-panel');
  oldPanel?.remove();

  const panel = document.createElement('div');
  panel.className = 'v-horizontal-menu__panel';
  panel.id = 'menu-panel';

  const subMenuItemGroups = openedItem.children
    .map((_, index, arr) => (index % 2 === 0 ? arr.slice(index, index + 2) : null))
    .filter((item) => item);

  for (const group of subMenuItemGroups) {
    panel.appendChild(createSubmenuColumn(group!));
  }

  document.getElementById('horizontal-menu')?.appendChild(panel);
};

const createMenuItem = (item: HorizontalMenuItem) => {
  const menuItem = document.createElement('button');
  menuItem.className = 'v-horizontal-menu__item';
  if (item.icon) {
    const icon = createIcon({ name: item.icon });
    icon.classList.add('v-icon--sm');
    menuItem.appendChild(icon);
  }
  menuItem.appendChild(document.createTextNode(item.label));
  menuItem.appendChild(createIcon({ name: 'expand_more' }));
  menuItem.onclick = () => {
    createMenuPanel(item);
  };
  return menuItem;
};

const createMenuBar = () => {
  const menuBar = document.createElement('div');
  menuBar.className = 'v-horizontal-menu__menu-bar';
  for (const item of horizontalMenuItems) {
    menuBar.appendChild(createMenuItem(item));
  }
  return menuBar;
};

export const createHorizontalNavigation = () => {
  const horizontalMenu = document.createElement('div');
  horizontalMenu.className = 'v-horizontal-menu';
  horizontalMenu.id = 'horizontal-menu';
  horizontalMenu.appendChild(createMenuBar());

  return horizontalMenu;
};
