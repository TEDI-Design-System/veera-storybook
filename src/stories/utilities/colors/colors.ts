import tokens from '../../../../tokens-for-scss.json';

const colorTokens = tokens.variables.filter((t) => t.type === 'COLOR');

export const createBackgroundExamples = () => {
  const backgroundTokens = colorTokens.filter(
    (t) => t.collection === 'primitive-tokens' || t.group === 'colors/surface',
  );
  const backgroundClasses = backgroundTokens.map(
    (t) => `v-bg-${t.name.split('-').slice(-2).join('-')}`,
  );

  const container = document.createElement('div');
  container.className = 'v-flex v-flex-column v-gap-4';

  for (const bgClass of backgroundClasses) {
    const bgExample = document.createElement('div');
    bgExample.className = `${bgClass} v-p-6`;
    bgExample.innerText = `.${bgClass}`;
    const tone = bgClass.split('-').at(-1)!;
    if (!isNaN(parseFloat(tone)) && parseFloat(tone) > 500) {
      bgExample.style.color = 'white';
    }

    container.appendChild(bgExample);
  }

  return container;
};

export const createTextColorExamples = () => {
  const textColorTokens = colorTokens.filter(
    (t) =>
      (t.collection === 'primitive-tokens' || t.group === 'colors/text') &&
      !t.name.includes('alpha-100'),
  );
  const textColorClasses = textColorTokens.map(
    (t) => `v-color-${t.name.split('-').slice(-2).join('-')}`,
  );

  const container = document.createElement('div');
  container.className = 'v-flex v-flex-column v-gap-4';

  for (const colorClass of textColorClasses) {
    const textBg = document.createElement('div');
    textBg.className = 'v-p-6';
    const colorExample = document.createElement('h6');
    colorExample.className = colorClass;
    colorExample.innerText = `.${colorClass}`;
    textBg.appendChild(colorExample);

    const tone = colorClass.split('-').at(-1)!;
    if (!isNaN(parseFloat(tone)) && parseFloat(tone) < 500) {
      textBg.style.background = 'black';
    }

    container.appendChild(textBg);
  }

  return container;
};
