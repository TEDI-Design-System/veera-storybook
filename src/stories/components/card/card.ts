import clsx from 'clsx';
import { createContentFill } from '../../utils';
import '@scss/components/card.scss';

export interface CardProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'tertiary';
  flat?: boolean;
}

export const createCard = ({ size = 'md', variant = 'primary', flat }: CardProps) => {
  const card = document.createElement('div');
  card.className = clsx('v-card', `v-card--${size}`, `v-card--${variant}`, {
    'v-card--flat': flat,
  });
  return card;
};

export const createCardStory = (props: CardProps) => {
  const card = createCard(props);
  card.appendChild(createContentFill());
  return card;
};
