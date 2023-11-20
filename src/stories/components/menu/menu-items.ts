import { HorizontalNavItem } from './horizontal-navigation';
import { SideNavItem } from './side-navigation';

export const sideNavItems: SideNavItem[] = [
  {
    label: 'Avaleht',
    icon: 'dashboard',
  },
  {
    label: 'Ärisaladused',
    icon: 'key',
    children: [
      {
        label: 'Ärisaladus 1',
        icon: 'paid',
        children: [
          {
            label: 'Top secret',
          },
        ],
      },
      {
        label: 'Ärisaladus 2',
        icon: 'account_balance',
      },
      {
        label: 'Ärisaladus 3',
        icon: 'money',
      },
    ],
  },
  {
    label: 'Süvamenüü',
    icon: 'public',
    children: [
      {
        label: 'Mina',
        icon: 'person',
      },
      {
        label: 'Meie',
        icon: 'group',
      },
      {
        label: 'Nemad',
        icon: 'groups',
      },
    ],
  },
  {
    label: 'Seaded',
    icon: 'settings',
  },
];

export const horizontalNavItems: HorizontalNavItem[] = [
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
  {
    label: 'Minu dokumendid',
    icon: 'apartment',
    children: [],
  },
  {
    label: 'Minu arveldused',
    icon: 'apartment',
    children: [],
  },
];
