import tokensJson from '../tokens-for-scss.json' assert { type: 'json' };
import { autoGenWarning, prefix } from './constants.js';

const getBgClass = (colorInfix, name) => {
  return `.${prefix}-bg-${colorInfix} {
  background: var(--${prefix}-${name});
}`;
};

const getColorClasses = (token) => {
  const colorInfix = token.name.split('-').slice(-2).join('-');
  const classes = [getBgClass(colorInfix, token.name)];
  return classes.join('\n\n');
};

const getColorUtilsScss = () => {
  const colorTokens = tokensJson.variables.filter(
    (v) => v.type === 'COLOR' && v.collection === 'primitive-tokens',
  );
  const scss = `${autoGenWarning}${colorTokens.map(getColorClasses).join('\n\n')}`;
  return scss;
};

export { getColorUtilsScss };
