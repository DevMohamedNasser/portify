import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Playwrite AU QLD"', 'cursive'],
      },
      colors: {
        'hamada-100': '#d2b48c',
        'hamada-300': '#59390f',
      },
    },
  },
  plugins: [flowbitePlugin],
};
