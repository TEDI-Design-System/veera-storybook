import '@scss/components/menu.scss';
import { createIcon } from '../../utils';
import clsx from 'clsx';

interface MenuItem {
  label: string;
  icon?: string;
  children: SubMenuItem[];
}

interface SubMenuItem {
  name: string;
  children: string[];
}

const horizontalMenuItems: MenuItem[] = [
  {
    label: 'Avaleht',
    icon: 'apartment',
    children: [
      {
        name: 'Submenu item',
        children: [
          'Haridus ja teadus',
          'Analüüside ja uuringute tulemused',
          'Tervishoid ja arstiabi',
          'Pensionid',
          'Perekond',
          'Töö ja töösuhted',
        ],
      },
      {
        name: 'Submenu item',
        children: [
          'Haridus ja teadus',
          'Analüüside ja uuringute tulemused',
          'Tervishoid ja arstiabi',
          'Pensionid',
          'Perekond',
          'Töö ja töösuhted',
        ],
      },
      {
        name: 'Submenu item',
        children: ['Haridus ja teadus', 'Tervishoid ja arstiabi', 'Pensionid', 'Töö ja töösuhted'],
      },
    ],
  },
];

export const createHorizontalNavigation = () => {
  const horizontalMenu = document.createElement('div');

  return horizontalMenu;
};
