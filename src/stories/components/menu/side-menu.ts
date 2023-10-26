import '@scss/components/menu.scss';
import { createIcon } from '../../utils';
import clsx from 'clsx';
import { sideNavItems } from './menu-items';

export interface SideMenuItem {
  label: string;
  icon?: string;
  children?: SideMenuItem[];
}

const createMenuItem = (item: SideMenuItem, level: number) => {
  const expandable = !!item.children?.length;
  const menuItem = document.createElement(expandable ? 'button' : 'a');
  menuItem.className = clsx('v-side-menu__item', {
    'v-side-menu__item--secondary': level === 2,
    'v-side-menu__item--tertiary': level === 3,
  });
  if (item.icon) {
    menuItem.appendChild(createIcon({ name: item.icon }));
  }
  menuItem.appendChild(document.createTextNode(item.label));
  if (expandable) {
    const expandIcon = createIcon({ name: 'expand_more' });
    expandIcon.classList.add('v-side-menu__expand-icon');
    menuItem.appendChild(expandIcon);
  }
  return menuItem;
};

const populateMenu = ({
  parent,
  item,
  level,
}: {
  parent: HTMLElement;
  item: SideMenuItem;
  level: number;
}) => {
  const listItem = document.createElement('li');

  if (item.children?.length) {
    let expanded = false;
    listItem.className = 'v-side-menu__sub-menu';
    const menuItem = createMenuItem(item, level);
    menuItem.setAttribute('aria-expanded', 'false');
    menuItem.onclick = () => {
      expanded = !expanded;
      if (expanded) {
        childrenList.hidden = false;
        listItem.classList.add('v-side-menu__sub-menu--expanded');
      } else {
        setTimeout(() => {
          childrenList.hidden = true;
        }, 300);
        listItem.classList.remove('v-side-menu__sub-menu--expanded');
      }
      menuItem.setAttribute('aria-expanded', expanded.toString());
    };
    listItem.appendChild(menuItem);
    const childrenList = document.createElement('ul');
    childrenList.hidden = true;
    for (const child of item.children) {
      populateMenu({ parent: childrenList, item: child, level: level + 1 });
    }
    listItem.appendChild(childrenList);
  } else {
    const menuItem = createMenuItem(item, level);
    menuItem.setAttribute('href', '#');
    listItem.appendChild(menuItem);
  }

  parent.appendChild(listItem);
};

export const createSideNavigation = () => {
  const sidemenu = document.createElement('div');
  sidemenu.className = 'v-side-menu v-side-menu--visible';

  const overlay = document.createElement('div');
  overlay.className = 'v-overlay';
  sidemenu.appendChild(overlay);

  const content = document.createElement('div');
  content.className = 'v-side-menu__content';
  sidemenu.appendChild(content);
  const nav = document.createElement('nav');
  content.appendChild(nav);
  const itemsList = document.createElement('ul');
  nav.appendChild(itemsList);

  for (const item of sideNavItems) {
    populateMenu({ parent: itemsList, item, level: 1 });
  }

  return sidemenu;
};
