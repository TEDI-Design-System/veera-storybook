import { createCloseButton } from '../button/button';

export interface TagProps {
  text: string;
  closable?: boolean;
}

export const createTag = ({ text = 'Tag', closable }: TagProps) => {
  const tag = document.createElement('div');
  tag.className = 'v-tag';
  tag.appendChild(document.createTextNode(text));

  if (closable) {
    tag.appendChild(createCloseButton('Eemalda silt', true));
  }

  return tag;
};
