import '@scss/reboot.scss';
import '@scss/veera-variables-dark.scss';
import '@scss/veera-variables.scss';
import { addons } from '@storybook/addons';
import { GLOBALS_UPDATED } from '@storybook/core-events';
import type { Preview } from '@storybook/html';
import pretty from 'pretty';

const LIGHT_BG = '#FFF';
const DARK_BG = '#131317';

const preview: Preview = {
  parameters: {
    docs: {
      transformSource: (input) => pretty(input),
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: LIGHT_BG,
        },
        {
          name: 'dark',
          value: DARK_BG,
        },
      ],
    },
  },
};

const channel = addons.getChannel();

const onGlobalsChange = ({ globals }) => {
  if (globals.backgrounds) {
    document.documentElement.dataset.vColorScheme =
      globals.backgrounds.value === DARK_BG ? 'dark' : 'light';
  }
};

function setupGlobalsListener() {
  channel.removeListener(GLOBALS_UPDATED, onGlobalsChange);
  channel.addListener(GLOBALS_UPDATED, onGlobalsChange);
}

setupGlobalsListener();

export default preview;
