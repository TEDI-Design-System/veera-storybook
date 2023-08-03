import { NumericRange } from '../../utils';
import '../../../../dist/css/utilities/grid.css';

const renderChildren = (children?: string | string[]) => {
  if (!children) {
    return '';
  }
  if (typeof children === 'string') {
    return children;
  }
  return children.join('');
};

type MediaProps<T> = {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  xxl?: T;
};

interface IColProps extends MediaProps<{ size?: NumericRange<0, 12> }> {
  content?: string;
  size?: NumericRange<0, 12>;
}

const createCol = ({ content, ...sizes }: IColProps) => {
  const classes = Object.entries(sizes)
    .flatMap(([key, val]) => {
      if (typeof val === 'number') {
        return `v-col-${val}`;
      }
      const breakpoint = key;
      return Object.values(val).map((size) => `v-col-${breakpoint}-${size}`);
    })
    .join(' ');
  return `<div class="${classes || 'v-col'}">${renderChildren(content)}</div>`;
};

interface IRowGutterProps {
  g?: NumericRange<0, 12>;
  gx?: NumericRange<0, 12>;
  gy?: NumericRange<0, 12>;
}

interface IRowProps extends IRowGutterProps, MediaProps<IRowGutterProps> {
  cols?: string | string[];
}

const createRow = ({ cols, ...gutters }: IRowProps) => {
  const classes = Object.entries(gutters)
    .flatMap(([key, val]) => {
      if (typeof val === 'number') {
        return `v-${key}-${val}`;
      }
      const breakpoint = key;
      return Object.entries(val).map(
        ([gutterType, gutterSize]) => `v-${gutterType}-${breakpoint}-${gutterSize}`,
      );
    })
    .join(' ');
  return `<div class="v-row ${classes}">${renderChildren(cols)}</div>`;
};

const createContainer = ({ rows }: { rows?: string | string[] }) => {
  return `<div class="v-container">${renderChildren(rows)}</div>`;
};

export const createGridExample = () => {
  return createContainer({
    rows: [
      createRow({
        cols: [
          createCol({ content: '1st row' }),
          createCol({ content: '1st row' }),
          createCol({ content: '1st row' }),
        ],
      }),
      createRow({
        cols: [
          createCol({ content: '2nd row', size: 4, lg: { size: 4 } }),
          createCol({ content: '2nd row', size: 8, lg: { size: 4 } }),
          createCol({ content: '2nd row', size: 4, lg: { size: 4 } }),
        ],
      }),
      createRow({
        cols: [
          createCol({
            content: '<div style="background:black;color:white;min-width:200px">Wrap me pls</div>',
          }),
          createCol({
            content: '<div style="background:black;color:white;min-width:200px">Wrap me pls</div>',
          }),
          createCol({
            content: '<div style="background:black;color:white;min-width:200px">Wrap me pls</div>',
          }),
        ],
      }),
    ],
  });
};
