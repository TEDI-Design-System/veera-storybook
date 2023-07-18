import type { Preview } from "@storybook/html";

import "../src/utilities/colors/colors.scss";
import "../dist/veera-variables.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
