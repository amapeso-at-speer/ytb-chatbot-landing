const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      'dark-blue': 'rgb(6, 6, 15)',
      'blue': 'rgb(25, 35, 77)',
    },
    extend: {
      zIndex: {
        '100': '100',
      },
      animation: {
        first: "moveVertical 60s ease infinite",
        second: "moveInCircle 80s reverse infinite",
        third: "moveInCircle 80s linear infinite",
        fourth: "moveHorizontal 90s ease infinite",
        fifth: "moveInCircle 60s ease infinite",
        hovering: "hover 3s ease-in-out infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        hover: {
          "0%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "translateY(5%)",
          },
          "100%": {
            transform: "translateY(-5%)",
          },
        }
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
