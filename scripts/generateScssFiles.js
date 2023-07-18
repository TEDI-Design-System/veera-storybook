import designTokensJson from '../design-tokens.json' assert { type: 'json' };
import fs from 'fs';

const getVarRow = (variable) => {
  const value = variable.alias ? `var(--${variable.value})` : variable.value;
  return `--${variable.name}: ${value};`;
};

const generateScssFiles = () => {
  console.log('Generating scss files...');
  const variables = designTokensJson.variables;
  const scss = `:root {
  ${variables.map(getVarRow).join('\n  ')}
}`;
  fs.writeFileSync('src/veera-variables.scss', scss);
  console.log('Done!');
};

generateScssFiles();
