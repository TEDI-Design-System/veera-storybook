import clsx from 'clsx';
import { bodyCells, head, mobileTable, nestedHead } from './table.data';
import { createPagination } from '../pagination/pagination';
import { createButton } from '../button/button';
import { createIcon } from '../../utils';

export interface TableStoryProps {
  bordered: boolean;
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
        if (i === (nested ? 4 : 5)) {
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
    if ([1, 2].includes(i)) {
      row.setAttribute('aria-expanded', 'true');
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

      if ([1, 2].includes(i) && index === 0) {
        const tdContent = document.createElement('div');
        tdContent.className = 'v-flex v-flex-align-center v-gap-4';
        tdContent.appendChild(createIcon({ name: 'expand_less' }));
        if (content) {
          tdContent.appendChild(createCellContent(content));
        }
        td.appendChild(tdContent);
      } else {
        if (content) {
          td.appendChild(createCellContent(content));
        }
      }
    });
  }

  return tbody;
};

export const createTable = ({
  bordered,
  interactive,
  fixed,
  sticky,
  nestedHead,
}: TableStoryProps) => {
  const table = document.createElement('table');
  table.className = clsx('v-table', {
    'v-table--bordered': bordered,
    'v-table--fixed': fixed,
  });
  table.appendChild(createTableHead({ sticky, nestedHead }));
  table.appendChild(createTableBody({ interactive, sticky }));

  return table;
};

export const createScrollableTable = (props: TableStoryProps) => {
  const table = createTable(props);

  const tableWrapper = document.createElement('div');
  tableWrapper.className = 'v-table-wrapper';

  const tableScroll = document.createElement('div');
  tableScroll.className = 'v-table-scroll';
  tableScroll.appendChild(table);
  tableWrapper.appendChild(tableScroll);
  tableWrapper.appendChild(createPagination());

  return tableWrapper;
};

export const createMobileSubTable = ({ editButton }: { editButton?: boolean }) => {
  const table = document.createElement('table');
  table.className = 'v-mobile-table';

  for (const [heading, value] of Object.entries(mobileTable)) {
    const row = document.createElement('tr');
    const th = document.createElement('th');
    th.scope = 'row';
    th.innerText = heading;
    row.appendChild(th);
    const td = document.createElement('td');
    if (typeof value === 'string') {
      td.innerText = value;
    } else {
      td.appendChild(value);
    }
    row.appendChild(td);
    table.appendChild(row);
  }

  if (editButton) {
    const editRow = document.createElement('tr');
    const fullWidthCell = document.createElement('td');
    fullWidthCell.className = 'v-cell--center';
    fullWidthCell.colSpan = 2;
    fullWidthCell.appendChild(
      createButton({ label: 'Muuda', leftIcon: 'edit', variant: 'neutral' }),
    );
    editRow.appendChild(fullWidthCell);
    table.appendChild(editRow);
  }

  return table;
};

export const createMobileTable = (props: { editButton?: boolean }) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'v-flex v-flex-column v-gap-6';

  for (let i = 0; i < 3; i++) {
    wrapper.appendChild(createMobileSubTable(props));
  }

  return wrapper;
};
