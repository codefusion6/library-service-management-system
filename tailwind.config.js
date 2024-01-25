/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
// const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primaryColor: '#0f3054',
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
}