import { slate } from "@aegov/design-system/src/color";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: false,
  },
  theme: {
    extend: {
      colors: {
        'primary': {
           DEFAULT: '#315679',
           50: '#E9EFF6',
           100: '#D5E2EE',
           200: '#ADC6DE',
           300: '#85AACE',
           400: '#5D8EBD',
           500: '#4172A1',
           600: '#315679',
           700: '#274460',
           800: '#1C3246',
           900: '#12202D',
           950: '#0D1720'
         },
       'primary-support': {
         DEFAULT: '#315679',
         50: '#E9EFF6',
         100: '#D5E2EE',
         200: '#ADC6DE',
         300: 'red',
         400: 'red',
         500: '#4172A1',
         600: '#315679',
         700: '#274460',
         800: '#1C3246',
         900: 'red',
         950: '#0D1720'
       },
       'secondary-support': {
         DEFAULT: '#315679',
         50: '#E9EFF6',
         100: '#D5E2EE',
         200: '#ADC6DE',
         300: 'green',
         400: 'green',
         500: '#4172A1',
         600: '#315679',
         700: '#274460',
         800: '#1C3246',
         900: 'red',
         950: '#0D1720'
       },
      },
    },
  },
  plugins: [
    require("@aegov/design-system"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
