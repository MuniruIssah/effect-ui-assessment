/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'effect-yellow': '#F9DC38',
        'effect-yellow-faded': '#FEFAE1',
        'effect-blue':'#1256DB',
        'effect-black': '#111112',
        'effect-green': '#27B03F',
        'effect-red': '#EE503E',
        'effect-gray': '#EAEAEC',
        'effect-footer-gray': '#F5F5F6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
