import fs from 'fs';
import { scssContants } from '../constants.js';
import tokensJson from '../tokens-for-scss.json' assert { type: 'json' };
import { getColorUtilsScss } from './colorUtils.js';
import { autoGenWarning, prefix } from './constants.js';

const getVarRow = (variable) => {
  const value = variable.alias ? `var(--${prefix}-${variable.value})` : variable.value;
  return `--${prefix}-${variable.name}: ${value};`;
};

const getBoxShadowRow = (variable) => {
  return `--${prefix}-box-shadow-${variable.name}: ${variable.value};`;
};

const generateDarkModeVariables = () => {
  const variables = tokensJson.variables
    .filter((v) => !!v.darkMode)
    .map((v) => ({ name: v.name, ...v.darkMode }));
  const boxShadows = tokensJson.boxShadows
    .filter((s) => !!s.name.includes('dark-mode'))
    .map((s) => ({ name: s.name.replace('-dark-mode', ''), ...s }));
  const scss = `${autoGenWarning}@media (prefers-color-scheme: dark) {
    :root {
      ${variables.map(getVarRow).join('\n')}
      ${boxShadows.map(getBoxShadowRow).join('\n')}
    }
  }
  [data-${prefix}-color-scheme="dark"] {
    ${variables.map(getVarRow).join('\n')}
    ${boxShadows.map(getBoxShadowRow).join('\n')}
  }`;
  fs.writeFileSync('src/scss/veera-variables-dark.scss', scss);
};

const generateVariables = () => {
  const variables = tokensJson.variables;
  const boxShadows = tokensJson.boxShadows;
  const scss = `${autoGenWarning}:root, :root[data-${prefix}-color-scheme="light"] {
  ${variables.map(getVarRow).join('\n')}
  ${boxShadows.map(getBoxShadowRow).join('\n')}
}`;
  fs.writeFileSync('src/scss/veera-variables.scss', scss);
};

const getTextStyleMixin = (textStyle) => {
  const { name, ...styles } = textStyle;
  return `@mixin ${name} {
  ${Object.entries(styles)
    .map(([key, val]) => `${key}: ${val};`)
    .join('\n  ')}
}`;
};

const generateTextStyles = () => {
  const textStyles = tokensJson.typography;
  const scss = `${autoGenWarning}${textStyles.map(getTextStyleMixin).join('\n\n')}`;
  fs.writeFileSync('src/scss/mixins/_text-styles.scss', scss);
};

const generateConstants = () => {
  const scss = `${autoGenWarning}${Object.entries(scssContants)
    .map(([key, val]) => `$${key}: ${val};`)
    .join('\n')}`;
  fs.writeFileSync('src/scss/_constants.scss', scss);
};

const generateColorUtils = () => {
  const scss = getColorUtilsScss();
  fs.writeFileSync('src/scss/utilities/colors.scss', scss);
};

const generateScssFiles = () => {
  console.log('Generating scss files...');
  generateConstants();
  generateVariables();
  generateDarkModeVariables();
  generateTextStyles();
  generateColorUtils();
  console.log('Done!');
};

generateScssFiles();
