import { createIcon, createLink } from '../../utils';
import EELogo from '../../assets/logo.svg';
import clsx from 'clsx';

interface Block {
  name: string;
  links: string[];
}

const blocks: Block[] = [
  {
    name: 'Kiirelt kätte',
    links: [
      'Kasutajakonto ja pääsuõigused',
      'Info mitteresidendile',
      'E-teenuste kasutamise juhendid',
      'Turvalisus e-teenuste keskkonnas',
      'Maksukalender',
      'Rekvisiidid maksude tasumiseks',
    ],
  },
  {
    name: 'Vajate abi',
    links: ['Kirjutage meile help@ria.ee', 'Asrutuse kontaktid'],
  },
];

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

const createLogoBlock = (logo: string) => {
  const block = document.createElement('div');
  block.className = 'v-footer__logo-block';

  const img = document.createElement('img');
  img.src = logo;
  block.appendChild(img);

  return block;
};

const createBlock = (blockContent: Block) => {
  const block = document.createElement('div');
  block.className = 'v-footer__content-block';

  const header = document.createElement('p');
  header.innerText = blockContent.name;
  block.appendChild(header);

  for (const blockLink of blockContent.links) {
    const link = createLink({ text: blockLink, icon: 'chevron_right' });
    block.appendChild(link);
  }

  return block;
};

const createContent = () => {
  const content = document.createElement('div');
  content.className = 'v-footer__content';

  content.appendChild(createLogoBlock(EELogo));
  for (const block of blocks) {
    content.appendChild(createBlock(block));
  }

  return content;
};

export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'v-footer';

  footer.appendChild(createContent());
  footer.appendChild(createSocials());

  return footer;
};
