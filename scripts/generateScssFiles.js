import tokensJson from '../tokens-for-scss.json' assert { type: 'json' };
import fs from 'fs';
import { scssContants } from '../constants.js';
import { getColorUtilsScss } from './colorUtils.js';
import { autoGenWarning, prefix } from './constants.js';

const getVarRow = (variable) => {
  const value = variable.alias ? `var(--${prefix}-${variable.value})` : variable.value;
  return `--${prefix}-${variable.name}: ${value};`;
};

const getBoxShadowRow = (variable) => {
  return `--${prefix}-box-shadow-${variable.name}: ${variable.value};`;
};

const generateVariables = () => {
  const variables = tokensJson.variables;
  const boxShadows = tokensJson.boxShadows;
  const scss = `${autoGenWarning}:root {
  ${variables.map(getVarRow).join('\n  ')}
  ${boxShadows.map(getBoxShadowRow).join('\n  ')}
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
  generateTextStyles();
  generateColorUtils();
  console.log('Done!');
};

generateScssFiles();
