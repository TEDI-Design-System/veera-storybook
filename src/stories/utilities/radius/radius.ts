import '@scss/utilities/utilities.scss';

const areas = ['t', 'b', 'l', 'r', 'tl', 'tr', 'bl', 'br'];

const createExampleBox = (radius: number, area?: string) => {
  const className = area ? `v-${area}-radius-${radius}` : `v-radius-${radius}`;
  const box = document.createElement('div');
  box.style.height = '128px';
  box.style.width = '128px';
  box.style.border = '2px solid darkgray';
  box.className = `${className} v-flex v-justify-content-center v-align-items-center`;
  box.innerHTML = `.${className}`;
  return box;
};

export const createRadiusExamples = () => {
  const container = document.createElement('div');

  const sizesTitle = document.createElement('h1');
  sizesTitle.innerText = 'Radiuses';
  sizesTitle.style.textAlign = 'center';
  container.appendChild(sizesTitle);

  const sizesWrapper = document.createElement('div');
  sizesWrapper.className = 'v-flex v-gap-9 v-flex-wrap v-justify-content-center v-py-8';
  for (let radius = 0; radius < 6; radius++) {
    sizesWrapper.appendChild(createExampleBox(radius));
  }
  container.appendChild(sizesWrapper);

  const areasTitle = document.createElement('h1');
  areasTitle.innerText = 'Areas';
  areasTitle.style.textAlign = 'center';
  container.appendChild(areasTitle);

  const areasWrapper = sizesWrapper.cloneNode();
  for (const area of areas) {
    areasWrapper.appendChild(createExampleBox(4, area));
  }
  container.appendChild(areasWrapper);

  return container;
};
