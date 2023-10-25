import '@scss/utilities/utilities.scss';

const classes = ['md-up', 'lg-up', 'md-down', 'lg-down'];

const createExampleBox = (classSuffix: string) => {
  const className = `v-hide-${classSuffix}`;
  const box = document.createElement('div');
  box.style.height = '128px';
  box.style.width = '128px';
  box.style.border = '1px solid darkgray';
  box.className = `${className} v-flex v-justify-content-center v-align-items-center`;
  box.innerHTML = `.${className}`;
  return box;
};

export const createHideExamples = () => {
  const container = document.createElement('div');
  container.className = 'v-flex v-gap-9 v-flex-wrap v-justify-content-center v-py-8';

  for (const classSuffix of classes) {
    container.appendChild(createExampleBox(classSuffix));
  }

  return container;
};
