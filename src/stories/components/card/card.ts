import { createContentFill } from '../../utils';
import '@scss/components/card.scss';

export interface CardProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export const createCard = ({ size = 'md', variant = 'primary' }: CardProps) => {
  const card = document.createElement('div');
  card.className = `v-card v-card--${size} v-card--${variant}`;
  return card;
};

export const createCardStory = (props: CardProps) => {
  const card = createCard(props);
  card.appendChild(createContentFill());
  return card;
};
