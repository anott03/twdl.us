import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
          xs: ".75rem",
          sm: ".875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "4rem",
          "7xl": "5rem",
      },
      // fontFamily: {
      //     fuzzy: ["fuzzy bubbles", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
          purple: {
              "1": "#c8b6ea",
          },
          pink: {
              "1": "#EAB6D0",
              "2": "#EDE1FE",
              "3": "#EFE4FE",
              "4": "#F0E6FE",
          },
          red: {
              "1": "#FF9999",
              "2": "#FFA2A2",
              "3": "#FFAAAA",
              "4": "#FFB2B2",
          },
          melon: {
              "1": "#FFB6A3",
          },
          green: {
              "1": "#BCDDA7",
          },
          blue: {
              "1": "#81C8BE",
              "2": "#8CCDC4",
              "3": "#96D2C9",
              "4": "#A0D6CE",
          },
          slate: {
              "1": "#3D405B",
              "2": "#4F516A",
              "3": "#5F6178",
          },
          ...defaultTheme.colors,
      }
    },
  },
  plugins: [],
}
export default config
