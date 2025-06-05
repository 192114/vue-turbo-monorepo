// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import preset from '@shadow/config/eslint-config/index.js';

export default [{
  ignores: [
    '**/dist/**',
    '**/build/**',
    '**/node_modules/**',
    '**/coverage/**',
  ],
}, ...preset, ...storybook.configs["flat/recommended"]];