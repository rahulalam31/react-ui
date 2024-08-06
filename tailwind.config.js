/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: false,
  },
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [
    require("@aegov/design-system"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
