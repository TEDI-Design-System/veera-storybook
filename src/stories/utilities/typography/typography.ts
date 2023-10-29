import '@scss/typography.scss';
import './typography.stories.scss';

export const TEXT_VARIANTS = [
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['h5', 'h5'],
  ['h6', 'h6'],
  ['p', 'p'],
  ['display', 'h3'],
  ['body', 'p'],
  ['body-bold', 'p'],
  ['body-sm', 'p'],
  ['body-sm-bold', 'p'],
  ['body-xs', 'p'],
  ['subtitle', 'p'],
  ['subtitle-sm', 'p'],
] as const;

export interface TextProps {
  variant: (typeof TEXT_VARIANTS)[number][0];
}
export const createText = ({ variant = 'h1' }: TextProps) => {
  const [cl, element] = TEXT_VARIANTS.find((el) => el[0] === variant) || [];

  return `<${element} class="v-text-${String(
    cl,
  )}">The quick brown fox jumps over the lazy dog</${element}>`;
};

export const createTextCollection = () => {
  return `<div class="typography-container">
  <div class="typography-title">Example</div><div class="typography-title">Variant</div>
    ${TEXT_VARIANTS.map((cl) => `${createText({ variant: cl[0] })}<div>${cl[0]}</div>`).join('')}
  </div>`;
};

export const createLink = ({ size }: { size: 'xs' | 'sm' | 'md' }) => {
  const link = document.createElement('a');
  link.className = `v-link--${size}`;
  link.innerHTML = 'Regular';
  link.href = '#';

  return link;
};
