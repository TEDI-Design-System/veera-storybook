import designTokensJson from '../design-tokens.json' assert { type: 'json' };
import fs from 'fs';
import { scssContants } from '../constants.js';

const prefix = scssContants['veera-prefix'];
const autoGenWarning = '// NB! This file is auto generated\n\n';

const getVarRow = (variable) => {
  const value = variable.alias ? `var(--${prefix}-${variable.value})` : variable.value;
  return `--${prefix}-${variable.name}: ${value};`;
};

const getBoxShadowRow = (variable) => {
  return `--${prefix}-box-shadow-${variable.name}: ${variable.value};`;
};

const generateVariables = () => {
  const variables = designTokensJson.variables;
  const boxShadows = designTokensJson.boxShadows;
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
  const textStyles = designTokensJson.typography;
  const scss = `${autoGenWarning}${textStyles.map(getTextStyleMixin).join('\n\n')}`;
  fs.writeFileSync('src/scss/mixins/_text-styles.scss', scss);
};

const generateConstants = () => {
  const scss = `${autoGenWarning}${Object.entries(scssContants)
    .map(([key, val]) => `$${key}: ${val};`)
    .join('\n')}`;
  fs.writeFileSync('src/scss/_constants.scss', scss);
};

const generateScssFiles = () => {
  console.log('Generating scss files...');
  generateConstants();
  generateVariables();
  generateTextStyles();
  console.log('Done!');
};

generateScssFiles();
