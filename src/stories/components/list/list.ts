import clsx from 'clsx';
import { definitionData, orderedListItems, unorderedListItems } from './list.data';

export interface ListItem {
  title: string;
  children?: ListItem[];
}

export interface UnorderedListStory {
  plain?: boolean;
}

const createListItem = (item: ListItem, listType: 'ol' | 'ul') => {
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(item.title));
  if (item.children) {
    listItem.appendChild(createList(item.children, listType));
  }
  return listItem;
};

const createList = (items: ListItem[], listType: 'ol' | 'ul') => {
  const list = document.createElement(listType);
  for (const item of items) {
    list.appendChild(createListItem(item, listType));
  }
  return list;
};

export const createUnorderedListStory = ({ plain }: UnorderedListStory) => {
  const list = createList(unorderedListItems, 'ul');
  list.className = clsx('v-list', { 'v-list--plain': plain });
  return list;
};

export const createOrderedListStory = () => {
  const list = createList(orderedListItems, 'ol');
  list.className = clsx('v-list');
  return list;
};

export const createDefinitionList = () => {
  const definitionList = document.createElement('dl');
  definitionList.className = 'v-list';

  for (const [key, value] of Object.entries(definitionData)) {
    const term = document.createElement('dt');
    term.innerText = key;
    definitionList.appendChild(term);

    const definition = document.createElement('dd');
    definition.innerText = value;
    definitionList.appendChild(definition);
  }

  return definitionList;
};
