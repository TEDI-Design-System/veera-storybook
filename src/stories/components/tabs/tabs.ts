import clsx from 'clsx';
import '@scss/components/tabs.scss';
import { createContentFill, createHorizontalScrollButtons } from '../../utils';

export interface TabItemProps {
  selected?: boolean;
  disabled?: boolean;
  number: number;
  onSelect?: (tab: number) => void;
}

export const createTabItem = ({ selected, disabled, number, onSelect }: TabItemProps) => {
  const tabItem = document.createElement('button');
  tabItem.className = clsx('v-tabs__tab', { 'v-tabs__tab--selected': selected });
  tabItem.id = `tab-${number}`;
  tabItem.disabled = !!disabled;
  tabItem.innerText = `Tab ${number}`;
  tabItem.role = 'tab';
  tabItem.setAttribute('aria-selected', (!!selected).toString());

  if (onSelect) {
    tabItem.onclick = () => {
      onSelect(number);
    };
  }

  return tabItem;
};

export interface TabsStoryProps {}

export const createTabs = () => {
  let activeTabNr = 0;

  const tabs = document.createElement('div');
  tabs.className = 'v-tabs';

  const scrollButtonsContainer = document.createElement('div');
  scrollButtonsContainer.style.position = 'relative';
  tabs.appendChild(scrollButtonsContainer);

  const tabsList = document.createElement('div');
  tabsList.className = 'v-tabs__tab-list';
  tabsList.role = 'tablist';

  const onSelect = (stepNr: number) => {
    activeTabNr = stepNr;
    renderTabs();
    tabContent.setAttribute('aria-labelledby', `tab-${stepNr}`);
  };

  const renderTabs = () => {
    tabsList.innerHTML = '';
    for (let tabNr = 0; tabNr <= 10; tabNr++) {
      const tab = createTabItem({
        number: tabNr,
        selected: tabNr === activeTabNr,
        disabled: tabNr === 4,
        onSelect,
      });
      tabsList.appendChild(tab);
    }
  };

  renderTabs();

  scrollButtonsContainer.appendChild(tabsList);

  const tabContent = document.createElement('div');
  tabContent.className = 'v-tabs__content';
  tabContent.role = 'tabpanel';
  tabContent.setAttribute('aria-labelledby', `tab-0`);

  const content = createContentFill();
  tabContent.appendChild(content);

  tabs.appendChild(tabContent);

  setTimeout(() => {
    createHorizontalScrollButtons({ scrollableEl: tabsList, container: scrollButtonsContainer });
  }, 100);

  window.onresize = () => {
    createHorizontalScrollButtons({ scrollableEl: tabsList, container: scrollButtonsContainer });
  };

  return tabs;
};
