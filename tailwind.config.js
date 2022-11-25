/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        dark: "#111",
        light: "#f7f7f7",
        brandFrom: "#FB7185",
        brandVia: "#D946EF",
        brandTo: "#6366F1",
        uncolor: "#999",
      },
    },
  },
  plugins: [],
};
