/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        gray: "#f5f5f5",
        "dark-alt": "#d4d4d8",
        primary: "#e12d4a",
      },
    },
  },
  plugins: [],
};
