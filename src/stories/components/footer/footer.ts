import { createIcon, createLink, createLogo } from '../../utils';
import clsx from 'clsx';
import { createCol } from '../../utilities/grid/grid';

const links = ['Placeholder link', 'Placeholder link', 'Placeholder link', 'Placeholder link'];

const createSocials = () => {
  const socials = document.createElement('div');
  socials.className = 'v-footer__socials';

  for (let i = 0; i < 3; i++) {
    const socialLink = document.createElement('a');
    socialLink.className = clsx('v-footer__social-link', {
      'v-footer__social-link--disabled': i === 2,
    });
    if (i !== 2) {
      socialLink.href = '#';
    }
    socialLink.appendChild(createIcon({ name: 'public' }));
    socials.appendChild(socialLink);
  }

  return socials;
};

const createLogoBlock = () => {
  const block = document.createElement('div');
  block.className = 'v-col-12 v-col-lg-2';
  block.appendChild(createLogo());

  return block;
};

const createBlock = () => {
  const block = document.createElement('div');
  block.className = 'v-footer__block';

  const header = document.createElement('h3');
  header.className = 'v-footer__block-header';
  header.innerText = 'Block header';
  block.appendChild(header);

  const list = document.createElement('ul');
  for (const blockLink of links) {
    const listItem = document.createElement('li');
    const link = createLink({ text: blockLink, icon: 'chevron_right', iconLabel: 'Näidislink' });
    listItem.appendChild(link);
    list.appendChild(listItem);
  }
  block.appendChild(list);
  const blockColumn = createCol({ content: block, size: 12, md: { size: 6 }, lg: { size: 3 } });

  return blockColumn;
};

const createContent = () => {
  const content = document.createElement('div');
  content.className = 'v-footer__content v-row';

  content.appendChild(createLogoBlock());

  const blocks = document.createElement('div');
  blocks.className = 'v-footer__blocks v-row';
  for (let i = 0; i < 4; i++) {
    blocks.appendChild(createBlock());
  }
  const blocksColumn = createCol({ content: blocks, size: 12, lg: { size: 10 } });
  content.appendChild(blocksColumn);

  return content;
};

export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'v-footer';

  footer.appendChild(createContent());
  footer.appendChild(createSocials());

  return footer;
};
