import type { Preview } from "@storybook/nextjs-vite";

import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    viewport: {
      options: {
        mobile375: {
          name: "Mobile 375",
          styles: {
            width: "375px",
            height: "812px",
          },
          type: "mobile",
        },
        desktop1440: {
          name: "Desktop 1440",
          styles: {
            width: "1440px",
            height: "900px",
          },
          type: "desktop",
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
