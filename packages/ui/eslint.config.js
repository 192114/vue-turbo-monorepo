import preset from '@shadow/config/eslint-config/index.js';

export default [
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/node_modules/**',
      '**/coverage/**',
    ],
  },
  ...preset,
];