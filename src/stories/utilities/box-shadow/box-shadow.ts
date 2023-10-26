import '@scss/utilities/utilities.scss';

const shadows = ['elevation-2px', 'elevation-4px', 'sticky-right', 'sticky-left'];

const createExampleBox = (shadow: string) => {
  const className = `v-box-shadow-${shadow}`;
  const box = document.createElement('div');
  box.style.height = '128px';
  box.style.width = '256px';
  box.className = `${className} v-flex v-justify-content-center v-align-items-center`;
  box.innerHTML = `.${className}`;
  return box;
};

export const createBoxShadowExamples = () => {
  const container = document.createElement('div');
  container.className = 'v-flex v-gap-9 v-flex-wrap v-justify-content-center v-py-8';

  for (const shadow of shadows) {
    container.appendChild(createExampleBox(shadow));
  }

  return container;
};
