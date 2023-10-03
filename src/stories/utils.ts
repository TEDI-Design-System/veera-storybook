import { createButton } from './components/button/button';
import logo from './assets/logo.svg';

export type NumericRange<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR['length'] extends END
  ? ACC | START | END
  : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;

export const createContentFill = () => {
  const content = document.createElement('div');
  content.style.height = '200px';
  content.style.border = '1px dashed lightgray';
  content.style.borderRadius = '4px';
  return content;
};

export const createHorizontalScrollButtons = (overflowElement: HTMLElement) => {
  const leftBtnToRemove = overflowElement.querySelector('#left-scroll-btn');
  if (leftBtnToRemove) {
    overflowElement.removeChild(leftBtnToRemove);
  }

  const rightBtnToRemove = overflowElement.querySelector('#right-scroll-btn');
  if (rightBtnToRemove) {
    overflowElement.removeChild(rightBtnToRemove);
  }

  // const onScroll = () => {
  //   setTimeout(() => {
  //     createHorizontalScrollButtons(overflowElement);
  //   }, 100);
  // };

  if (overflowElement.scrollWidth > overflowElement.clientWidth) {
    if (overflowElement.scrollLeft > 0) {
      const scrollLeftBtn = createButton({
        size: 'sm',
        iconOnly: true,
        floating: true,
        label: 'chevron_left',
      });
      scrollLeftBtn.id = 'left-scroll-btn';
      scrollLeftBtn.style.position = 'absolute';
      scrollLeftBtn.style.left = '0';
      scrollLeftBtn.style.top = '50%';
      scrollLeftBtn.style.transform = 'translateY(-50%)';
      // scrollLeftBtn.onclick = () => {
      //   overflowElement.scrollLeft = 0;
      //   onScroll();
      // };
      overflowElement.appendChild(scrollLeftBtn);
    }
    if (overflowElement.scrollLeft + overflowElement.clientWidth < overflowElement.scrollWidth) {
      const scrollRightBtn = createButton({
        size: 'sm',
        iconOnly: true,
        floating: true,
        label: 'chevron_right',
      });
      scrollRightBtn.id = 'right-scroll-btn';
      scrollRightBtn.style.position = 'absolute';
      scrollRightBtn.style.right = '0';
      scrollRightBtn.style.top = '50%';
      scrollRightBtn.style.transform = 'translateY(-50%)';
      // scrollRightBtn.onclick = () => {
      //   overflowElement.scrollLeft = overflowElement.scrollWidth - overflowElement.clientWidth;
      //   onScroll();
      // };
      overflowElement.appendChild(scrollRightBtn);
    }
  }
};

export const createIcon = ({ name, outlined }: { name: string; outlined?: boolean }) => {
  const icon = document.createElement('span');
  icon.className = outlined ? 'material-icons-outlined' : 'material-icons';
  icon.innerText = name;
  icon.setAttribute('aria-hidden', 'true');
  return icon;
};

export const createLink = (text: string) => {
  const link = document.createElement('a');
  link.href = '#';
  link.innerText = text;
  return link;
};

export const createLogo = () => {
  const img = document.createElement('img');
  img.src = logo;
  img.alt = 'logo';
  return img;
};
