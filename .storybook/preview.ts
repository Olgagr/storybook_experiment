import type { Preview, ReactRenderer } from "@storybook/react";
import {
  withThemeByDataAttribute,
  withThemeByClassName,
} from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme",
      },
      defaultTheme: "light",
    }),
    // withThemeByDataAttribute<ReactRenderer>({
    //   themes: {
    //     light: "light",
    //     dark: "dark",
    //   },
    //   defaultTheme: "light",
    //   attributeName: "data-bs-theme",
    // }),
  ],
};

export default preview;
