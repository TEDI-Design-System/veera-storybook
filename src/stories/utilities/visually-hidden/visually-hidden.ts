import { createLink } from '../../utils';

export const createVisuallyHiddenStory = () => {
  const container = document.createElement('div');

  const title = document.createElement('h1');
  title.innerText = 'Sellel tabelil on caption';
  container.append(title);

  const table = document.createElement('table');
  table.className = 'v-mobile-table';
  container.append(table);

  const caption = document.createElement('caption');
  caption.innerText = 'Mobiili tabel';
  caption.className = 'v-visually-hidden';
  table.appendChild(caption);

  const row = document.createElement('tr');
  const th = document.createElement('th');
  th.scope = 'row';
  th.innerText = 'Päis';
  row.appendChild(th);
  const td = document.createElement('td');
  td.innerText = 'Väärtus';
  row.appendChild(td);
  table.appendChild(row);

  return container;
};

export const createVisuallyHiddenFocusableStory = () => {
  const container = document.createElement('div');

  const link = createLink({ text: 'Liigu põhisisu juurde' });
  link.href = '#main-title';
  link.classList.add('v-visually-hidden-focusable');
  container.appendChild(link);

  const title = document.createElement('h1');
  title.innerText = 'Siin on peidus fokuseeritav link';
  title.id = 'main-title';
  container.appendChild(title);

  return container;
};
