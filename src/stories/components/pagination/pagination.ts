import { createSelect } from '../../forms/select/select';
import { createButton } from '../button/button';
import clsx from 'clsx';

const createResultsPerPage = () => {
  const label = document.createElement('label');
  label.className = 'v-pagination__items-limit';
  label.innerText = 'Kuva korraga';
  label.appendChild(createSelect({ size: 'sm', value: '5', options: ['5', '10', '15'] }));
  return label;
};

const createPageButton = (nr: number) => {
  const button = document.createElement('button');
  button.className = clsx('v-pagination__page', {
    'v-pagination__page--selected': nr === 1,
  });
  button.innerText = `${nr}`;
  return button;
};

const createPages = () => {
  const pager = document.createElement('div');
  pager.className = 'v-pagination__pager';

  pager.appendChild(
    createButton({ label: 'west', iconOnly: true, variant: 'neutral', disabled: true }),
  );

  const pages = document.createElement('div');
  pages.className = 'v-pagination__pages';
  pager.appendChild(pages);
  for (let nr = 1; nr < 6; nr++) {
    pages.append(createPageButton(nr));
  }
  const hiddenPages = document.createElement('div');
  hiddenPages.className = 'v-pagination__page';
  hiddenPages.innerText = '...';
  pages.appendChild(hiddenPages);

  pages.append(createPageButton(10));

  pager.appendChild(createButton({ label: 'east', iconOnly: true, variant: 'neutral' }));
  return pager;
};

const createResultsCounter = () => {
  const counter = document.createElement('span');
  counter.className = 'v-text-body-sm v-color-text-secondary';
  counter.innerText = '170 tulemust';
  return counter;
};

export const createPagination = () => {
  const pagination = document.createElement('div');
  pagination.className = 'v-pagination ';

  pagination.appendChild(createResultsCounter());
  pagination.appendChild(createPages());
  pagination.appendChild(createResultsPerPage());

  return pagination;
};
