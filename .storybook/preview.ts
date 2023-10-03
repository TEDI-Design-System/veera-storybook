import type { Preview } from '@storybook/html';
import '../dist/css/veera-variables.css';
import '../dist/css/veera-variables-dark.css';
import { addons } from '@storybook/addons';
import { GLOBALS_UPDATED } from '@storybook/core-events';

const LIGHT_BG = '#FFF';
const DARK_BG = '#202128';

const preview: Preview = {
  parameters: {
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
