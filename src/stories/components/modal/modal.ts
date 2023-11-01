import clsx from 'clsx';
import { createButton, createCloseButton } from '../button/button';
import { createContentFill } from '../../utils';

export interface ModalStoryProps {
  size: 'sm' | 'md' | 'lg' | 'fluid';
  scrollable?: boolean;
}

const titleElementId = 'modal-title';

const createModalContainer = ({ size, scrollable }: ModalStoryProps) => {
  const container = document.createElement('div');
  container.className = clsx('v-modal', `v-modal--${size}`, { 'v-modal--scrollable': scrollable });
  container.role = 'alertdialog';
  container.setAttribute('aria-labelledby', titleElementId);
  return container;
};

const createModalHeader = () => {
  const header = document.createElement('div');
  header.className = 'v-modal__header';
  header.appendChild(createTitle());
  header.appendChild(createCloseButton('Sulge modaalaken'));
  return header;
};

const createModalBody = () => {
  const body = document.createElement('div');
  body.className = 'v-modal__body';
  const content = createContentFill();
  content.style.height = '800px';
  body.appendChild(content);
  return body;
};

const createModalFooter = () => {
  const footer = document.createElement('div');
  footer.className = 'v-modal__footer';
  footer.append(createButton({ label: 'Katkesta', variant: 'secondary' }));
  footer.append(createButton({ label: 'Edasi' }));
  return footer;
};

const createTitle = () => {
  const title = document.createElement('h4');
  title.className = 'v-modal__title';
  title.textContent = 'Modal title';
  title.id = titleElementId;
  return title;
};

const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.className = 'v-overlay v-overlay--modal';
  return overlay;
};

export const createModal = ({ size = 'md', scrollable }: ModalStoryProps) => {
  const overlay = createOverlay();
  const modal = createModalContainer({ size, scrollable });
  modal.appendChild(createModalHeader());
  modal.appendChild(createModalBody());
  modal.appendChild(createModalFooter());
  overlay.appendChild(modal);
  return overlay;
};
