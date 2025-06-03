import preset from '@shadow/config/tailwind-config/index.js'

/** @type {import('tailwindcss').Config} */
export default preset({
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './.histoire/**/*.{vue,js,ts,jsx,tsx}'],
})
