/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6F0',
          200: '#F4ECE1',
          300: '#EDE2D2',
        },
        beige: {
          50: '#FAF6F0',
          100: '#F4ECE1',
          200: '#E8D5C4',
          300: '#D8BEA6',
          400: '#C7A687',
          500: '#B89270',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D4',
          200: '#EEDD9F',
          300: '#E4C96A',
          400: '#D8B73E',
          500: '#C9A227', // Primary Accent
          600: '#B08B1E',
          700: '#8E6D16',
          800: '#6E5312',
          900: '#533E10',
        },
        dark: {
          50: '#737373',
          100: '#525252',
          200: '#404040',
          700: '#2A2A2A',
          800: '#222222',
          900: '#1A1A1A', // Dark contrast
          950: '#121212',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
