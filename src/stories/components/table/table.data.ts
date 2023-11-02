import { createBadge } from '../badge/badge';
import { createButton } from '../button/button';

interface Cell {
  content: string | HTMLElement | null;
  colSpan?: number;
  rowSpan?: number;
}

interface Head {
  rows: { cells: Cell[] }[];
}

export const head: Head = {
  rows: [
    {
      cells: [
        { content: 'Kuupäev' },
        { content: 'Kellaaeg' },
        { content: 'Kestus' },
        { content: 'Asukoht' },
        { content: 'Isiku ID tuvastamisviis' },
        { content: null },
      ],
    },
  ],
};

export const nestedHead: Head = {
  rows: [
    {
      cells: [
        { content: 'Kuupäev', rowSpan: 2 },
        { content: 'Aeg', colSpan: 2 },
        { content: 'Asukoht', rowSpan: 2 },
        { content: 'Isiku tuvastamine', rowSpan: 2 },
        { content: null, rowSpan: 2 },
      ],
    },
    {
      cells: [{ content: 'Algusaeg' }, { content: 'Kestus' }],
    },
  ],
};

export const bodyCells: Cell[] = [
  { content: '22.03.2029' },
  { content: '13:11' },
  { content: '6 min' },
  { content: 'Ida-Virumaa' },
  { content: 'Pangalink' },
  {
    content: createButton({ label: 'Muuda', leftIcon: 'edit', variant: 'neutral', size: 'sm' }),
  },
];

export const mobileTable: Record<string, string | HTMLElement> = {
  Kuupäev: '22.03.2029',
  Kellaaeg: '13:11',
  Kestus: '6 min',
  Asukoht: 'Ida-Virumaa',
  'Isiku ID tuvastamisviis': 'Pangalink',
  Staatus: createBadge({ variant: 'success', label: 'Kehtiv' }),
};
