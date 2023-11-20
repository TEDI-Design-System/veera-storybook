import { NumericRange } from '../../utils';

type MediaProps<T> = {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
};

interface IColProps extends MediaProps<{ size?: NumericRange<0, 12> }> {
  content?: string;
  hasBorder?: boolean;
  size?: NumericRange<0, 12>;
}

const createCol = ({ content, hasBorder, ...sizes }: IColProps) => {
  const col = document.createElement('div');
  const classes =
    Object.entries(sizes)
      .flatMap(([key, val]) => {
        if (typeof val === 'number') {
          return `v-col-${val}`;
        }
        const breakpoint = key;
        return Object.values(val).map((size) => `v-col-${breakpoint}-${size}`);
      })
      .join(' ') || 'v-col';
  col.className = classes;
  col.innerHTML = content ?? classes;
  if (hasBorder) {
    col.style.border = '1px solid black';
  }
  return col;
};

interface IRowGutterProps {
  g?: NumericRange<0, 12>;
  gx?: NumericRange<0, 12>;
  gy?: NumericRange<0, 12>;
}

interface IRowProps extends IRowGutterProps, MediaProps<IRowGutterProps> {
  cols: HTMLElement[];
}

const createRow = ({ cols, ...gutters }: IRowProps) => {
  const row = document.createElement('div');
  const classes = [
    'v-row',
    ...Object.entries(gutters).flatMap(([key, val]) => {
      if (typeof val === 'number') {
        return `v-${key}-${val}`;
      }
      const breakpoint = key;
      return Object.entries(val).map(
        ([gutterType, gutterSize]) => `v-${gutterType}-${breakpoint}-${gutterSize}`,
      );
    }),
  ].join(' ');
  row.className = classes;
  for (const col of cols) {
    row.appendChild(col);
  }
  return row;
};

const createContainer = ({ rows }: { rows?: HTMLElement[] }) => {
  const container = document.createElement('div');
  rows?.forEach((row) => {
    container.appendChild(row);
  });
  container.className = 'v-container';
  return container;
};

export const createGridExample = () => {
  return createContainer({
    rows: [
      createRow({
        cols: [
          createCol({ hasBorder: true }),
          createCol({ hasBorder: true }),
          createCol({ hasBorder: true }),
        ],
      }),
      createRow({
        cols: [
          createCol({ size: 4, hasBorder: true }),
          createCol({ size: 8, lg: { size: 4 }, hasBorder: true }),
          createCol({ size: 4, hasBorder: true }),
        ],
      }),
    ],
  });
};
