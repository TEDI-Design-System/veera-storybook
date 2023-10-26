import '@scss/utilities/utilities.scss';

const focusRings = ['focus-ring-outset', 'focus-ring-inset'];

const createExampleBox = (focusRing: string) => {
  const className = `v-${focusRing}`;
  const box = document.createElement('div');
  box.tabIndex = 0;
  box.style.height = '128px';
  box.style.width = '256px';
  box.style.border = '1px solid darkgray';
  box.className = `${className} v-flex v-justify-content-center v-align-items-center`;
  box.innerHTML = `.${className}`;
  return box;
};

export const createFocusRingExamples = () => {
  const container = document.createElement('div');
  container.className = 'v-flex v-gap-9 v-flex-wrap v-justify-content-center v-py-8';

  for (const focusRing of focusRings) {
    container.appendChild(createExampleBox(focusRing));
  }

  return container;
};
