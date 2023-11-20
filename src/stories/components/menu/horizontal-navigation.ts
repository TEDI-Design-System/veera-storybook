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

  for (const link of item.children) {
    const itemLink = document.createElement('a');
    itemLink.className = 'v-horizontal-navigation__submenu-item';
    itemLink.href = '#';
    itemLink.innerText = link;

    block.appendChild(itemLink);
  }

  return block;
};

const createMenuPanel = (openedItem: HorizontalNavItem) => {
  const oldPanel = document.getElementById('menu-panel');
  oldPanel?.remove();

  const panel = document.createElement('div');
  panel.className = 'v-horizontal-navigation__panel';
  panel.id = 'menu-panel';

  for (const item of openedItem.children) {
    panel.appendChild(createSubMenuItemBlock(item));
  }

  document.getElementById('horizontal-menu')?.appendChild(panel);
};

const createMenuItem = (item: HorizontalNavItem) => {
  const menuItem = document.createElement('button');
  menuItem.className = 'v-horizontal-navigation__item';
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
  menuBar.className = 'v-horizontal-navigation__menu-bar';
  for (const item of horizontalNavItems) {
    menuBar.appendChild(createMenuItem(item));
  }
  return menuBar;
};

export const createHorizontalNavigation = () => {
  const horizontalMenu = document.createElement('div');
  horizontalMenu.className = 'v-horizontal-navigation';
  horizontalMenu.id = 'horizontal-menu';
  horizontalMenu.appendChild(createMenuBar());

  return horizontalMenu;
};
