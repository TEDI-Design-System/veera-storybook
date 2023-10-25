import tokensJson from '../tokens-for-scss.json' assert { type: 'json' };
import { autoGenWarning, prefix } from './constants.js';

const getBgColorClass = (token) => {
  const colorInfix = token.name.split('-').slice(-2).join('-');
  return `.${prefix}-bg-${colorInfix} {
  background: var(--${prefix}-${token.name});
}`;
};

const getTextColorClass = (token) => {
  const colorInfix = token.name.split('-').slice(-2).join('-');
  return `.${prefix}-color-${colorInfix} {
  color: var(--${prefix}-${token.name});
}`;
};

const getColorUtilsScss = () => {
  const primitiveColorTokens = tokensJson.variables.filter(
    (v) => v.type === 'COLOR' && v.collection === 'primitive-tokens',
  );
  const bgColorTokens = [
    ...tokensJson.variables.filter((v) => v.group === 'colors/surface'),
    ...primitiveColorTokens,
  ];
  const textColorTokens = [
    ...tokensJson.variables.filter((v) => v.group === 'colors/text'),
    ...primitiveColorTokens,
  ];
  const scss = `${autoGenWarning}${[
    ...bgColorTokens.map(getBgColorClass),
    ...textColorTokens.map(getTextColorClass),
  ].join('\n\n')}`;
  return scss;
};

export { getColorUtilsScss };
