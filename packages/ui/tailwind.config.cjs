const preset = require('@shadow/config/tailwind-preset');

/** @type {import('tailwindcss').Config} */
module.exports = preset({
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './.histoire/**/*.{vue,js,ts,jsx,tsx}',
  ],
}); 