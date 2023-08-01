import '@scss/typography.scss';
import './typography.stories.scss';

export const TEXT_VARIANTS = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'display',
  'body',
  'body-bold',
  'body-sm',
  'body-sm-bold',
  'body-xs',
  'subtitle',
  'subtitle-sm',
] as const;

export interface TextProps {
  variant: (typeof TEXT_VARIANTS)[number];
}
export const createText = ({ variant = 'h1' }: TextProps) => {
  return `<span class="v-text-${String(
    variant,
  )}">The quick brown fox jumps over the lazy dog</span>`;
};

export const createTextCollection = () => {
  return `<div class="typography-container">
  <div class="typography-title">Example</div><div class="typography-title">Variant</div>
    ${TEXT_VARIANTS.map((variant) => `${createText({ variant })}<div>${variant}</div>`).join('')}
  </div>`;
};
