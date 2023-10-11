import '@scss/components/table.scss';
import clsx from 'clsx';
import { bodyCells, head, nestedHead } from './table.data';

export interface TableStoryProps {
  bordered: boolean;
  outlined: boolean;
  interactive: boolean;
  fixed: boolean;
  sticky: boolean;
  nestedHead: boolean;
}

const createCellContent = (content: string | HTMLElement) => {
  if (typeof content === 'string') {
    return document.createTextNode(content);
  } else {
    return content.cloneNode(true);
  }
};

const createTableHead = ({
  sticky,
  nestedHead: nested,
}: {
  sticky: boolean;
  nestedHead: boolean;
}) => {
  const thead = document.createElement('thead');

  const headData = nested ? nestedHead : head;

  headData.rows.forEach((row, rowIndex) => {
    const headerRow = thead.insertRow();

    row.cells.forEach(({ content, rowSpan, colSpan }, i) => {
      const th = document.createElement('th');
      th.className = clsx({
        active: i === 0,
      });

      if (sticky && rowIndex === 0) {
        if (i === 0) {
          th.classList.add('v-table-cell--sticky', 'v-table-cell--right-shadow');
          th.style.left = '0';
        }
        if (i === 4) {
          th.classList.add('v-table-cell--sticky', 'v-table-cell--left-shadow');
          th.style.right = '0';
        }
      }

      if (content) {
        th.appendChild(createCellContent(content));
      }
      if (rowSpan) {
        th.rowSpan = rowSpan;
      }
      if (colSpan) {
        th.colSpan = colSpan;
      }
      headerRow.appendChild(th);
    });
  });

  return thead;
};

const createTableBody = ({ interactive, sticky }: { interactive: boolean; sticky: boolean }) => {
  const tbody = document.createElement('tbody');

  for (let i = 0; i < 5; i++) {
    const row = tbody.insertRow();
    row.className = clsx({
      'v-table-interactive': interactive,
      'v-table-row--secondary': i === 1,
      'v-table-row--tertiary': i === 2,
    });
    if (interactive) {
      row.setAttribute('tabindex', '0');
    }
    bodyCells.forEach(({ content }, index, arr) => {
      const td = row.insertCell();

      if (sticky) {
        if (index === 0) {
          td.className = 'v-table-cell--sticky v-table-cell--right-shadow';
          td.style.left = '0';
        }
        if (index === arr.length - 1) {
          td.className = 'v-table-cell--sticky v-table-cell--left-shadow';
          td.style.right = '0';
        }
      }

      if (content) {
        td.appendChild(createCellContent(content));
      }
    });
  }

  return tbody;
};

export const createTable = ({
  bordered,
  outlined,
  interactive,
  fixed,
  sticky,
  nestedHead,
}: TableStoryProps) => {
  const table = document.createElement('table');
  table.className = clsx('v-table', {
    'v-table--bordered': bordered,
    'v-table--outlined': outlined,
    'v-table--fixed': fixed,
  });
  table.appendChild(createTableHead({ sticky, nestedHead }));
  table.appendChild(createTableBody({ interactive, sticky }));

  return table;
};

export const createScrollableTable = (props: TableStoryProps) => {
  const table = createTable(props);

  const tableScroll = document.createElement('div');
  tableScroll.className = 'v-table-scroll';
  tableScroll.appendChild(table);

  return tableScroll;
};
