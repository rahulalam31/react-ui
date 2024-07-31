/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@aegov/design-system"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
