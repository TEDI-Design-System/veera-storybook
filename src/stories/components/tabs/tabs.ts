import clsx from 'clsx';
import '@scss/components/tabs.scss';

export interface TabItemProps {
  selected?: boolean;
  disabled?: boolean;
  number: number;
  onSelect?: (tab: number) => void;
}

export const createTabItem = ({ selected, disabled, number, onSelect }: TabItemProps) => {
  const tabItem = document.createElement('button');
  tabItem.className = clsx('v-tabs__tab', { 'v-tabs__tab--selected': selected });
  tabItem.disabled = !!disabled;
  tabItem.innerText = `Tab ${number}`;
  tabItem.role = 'tab';
  tabItem.ariaSelected = (!!selected).toString();

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

  const tabsList = document.createElement('div');
  tabsList.className = 'v-tabs__tab-list';
  tabsList.role = 'tablist';

  const onSelect = (stepNr: number) => {
    activeTabNr = stepNr;
    renderTabs();
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

  tabs.appendChild(tabsList);

  const tabContent = document.createElement('div');
  tabContent.className = 'v-tabs__content';

  const content = document.createElement('div');
  content.style.height = '200px';
  content.style.border = '1px dashed lightgray';
  content.style.borderRadius = '4px';
  tabContent.appendChild(content);

  tabs.appendChild(tabContent);

  return tabs;
};
