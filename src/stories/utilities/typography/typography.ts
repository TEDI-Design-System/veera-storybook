import './typography.stories.scss';

export const TEXT_VARIANTS = [
  ['display', 'h1, h2, h3'],
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['h5', 'h5'],
  ['h6', 'h6'],
  ['p', 'p'],
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
  return `<table class="typography-container">
  <tr><td class="typography-title">Example</td><td class="typography-title">Class</td><td class="typography-title">Preferred HTML tag</td><td class="typography-title">Styles also included with corresponding HTML element</td></tr>
    ${TEXT_VARIANTS.map(
      (cl) =>
        `<tr><td>${createText({ variant: cl[0] })}</td><td>.v-text-${cl[0]}</td><td>${
          cl[1]
        }</td><td>${cl[0] === cl[1] ? '&#x2705;' : '&#x274C;'}</td></tr>`,
    ).join('')}
  </div>`;
};
