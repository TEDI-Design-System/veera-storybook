import '@scss/components/loader.scss';

export const createLoader = () => {
  const loader = document.createElement('div');
  loader.className = 'v-loader';
  return loader;
};
