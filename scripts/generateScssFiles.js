import designTokensJson from '../design-tokens.json' assert { type: 'json' };
import fs from 'fs';

const getVarRow = (variable) => {
  const value = variable.alias ? `var(--${variable.value})` : variable.value;
  return `--${variable.name}: ${value};`;
};

const getBoxShadowRow = (variable) => {
  return `--box-shadow-${variable.name}: ${variable.value};`;
};

const generateVariables = () => {
  const variables = designTokensJson.variables;
  const boxShadows = designTokensJson.boxShadows;
  const scss = `:root {
  ${variables.map(getVarRow).join('\n  ')}
  ${boxShadows.map(getBoxShadowRow).join('\n  ')}
}`;
  fs.writeFileSync('src/scss/veera-variables.scss', scss);
}

const getTextStyleMixin = (textStyle) => {
  const { name, ...styles } = textStyle;
  return `@mixin ${name} {
  ${Object.entries(styles).map(([key, val]) => `${key}: ${val};`).join('\n  ')}
}`
}

const generateTextStyles = () => {
  const textStyles = designTokensJson.typography;
  const scss = `${textStyles.map(getTextStyleMixin).join('\n\n')}`;
  fs.writeFileSync('src/scss/mixins/_text-styles.scss', scss);
}

const generateScssFiles = () => {
  console.log('Generating scss files...');
  generateVariables();
  generateTextStyles();
  console.log('Done!');
};

generateScssFiles();
