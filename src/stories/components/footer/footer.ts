import '@scss/components/footer.scss';
import '@scss/typography.scss';
import { createIcon } from '../../utils';
import EELogo from '../../assets/logo.svg';
import SFLogo from './SFLogo.png';

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
    socialLink.className = 'v-footer__social-link';
    socialLink.appendChild(createIcon({ name: 'public' }));
    socials.appendChild(socialLink);
  }

  return socials;
};

const createLogoBlock = (logo: string) => {
  const block = document.createElement('div');
  block.className = 'v-footer__content-block';

  const img = document.createElement('img');
  img.src = logo;
  block.appendChild(img);

  return block;
};

const createBlock = (blockContent: Block) => {
  const block = document.createElement('div');
  block.className = 'v-footer__content-block';

  const header = document.createElement('div');
  header.className = 'v-footer__content-block-header';
  header.innerText = blockContent.name;
  block.appendChild(header);

  for (const blockLink of blockContent.links) {
    const topic = document.createElement('div');
    topic.className = 'v-footer__topic';
    topic.appendChild(createIcon({ name: 'chevron_right' }));
    const link = document.createElement('a');
    link.href = '#';
    link.innerText = blockLink;
    topic.appendChild(link);
    block.appendChild(topic);
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
  content.appendChild(createLogoBlock(SFLogo));

  return content;
};

export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.className = 'v-footer';

  footer.appendChild(createContent());
  footer.appendChild(createSocials());

  return footer;
};
