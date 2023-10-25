import '@scss/utilities/utilities.scss';

const borders = ['border', 'border-top', 'border-bottom', 'border-left', 'border-right'];

const createExampleBox = (border: string) => {
  const className = `v-${border}`;
  const box = document.createElement('div');
  box.style.height = '128px';
  box.style.width = '128px';
  box.className = `${className} v-flex v-justify-content-center v-align-items-center`;
  box.innerHTML = `.${className}`;
  return box;
};

export const createBorderExamples = () => {
  const container = document.createElement('div');
  container.className = 'v-flex v-gap-9 v-flex-wrap v-justify-content-center v-py-8';

  for (const border of borders) {
    container.appendChild(createExampleBox(border));
  }

  return container;
};
