import '@scss/components/button.scss';
import '@scss/components/modal.scss';
import '@scss/components/overlay.scss';
import clsx from 'clsx';
import { createButton, createCloseButton } from '../button/button';

export interface ModalStoryProps {
  size: 'sm' | 'md' | 'lg' | 'fluid';
}

const createModalContainer = ({ size }: ModalStoryProps) => {
  const container = document.createElement('div');
  container.className = clsx('v-modal', `v-modal--${size}`);
  return container;
};

const createModalHeader = () => {
  const header = document.createElement('div');
  header.className = 'v-modal__header';
  header.appendChild(createTitle());
  header.appendChild(createCloseButton());
  return header;
};

const createModalBody = () => {
  const body = document.createElement('div');
  body.className = 'v-modal__body';
  body.style.minHeight = '136px';
  body.style.border = '1px dashed var(--tabs-border-active, #D2D3D8)';
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
  return title;
};

const createOverlay = () => {
  const overlay = document.createElement('div');
  overlay.className = 'v-overlay';
  return overlay;
};

export const createModal = ({ size = 'md' }: ModalStoryProps) => {
  const overlay = createOverlay();
  const modal = createModalContainer({ size });
  modal.appendChild(createModalHeader());
  modal.appendChild(createModalBody());
  modal.appendChild(createModalFooter());
  overlay.appendChild(modal);
  return overlay;
};
