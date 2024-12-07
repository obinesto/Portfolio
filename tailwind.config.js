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
        background: '#03045e',
        'background-light': '#0D1627',
        'background-lighter': '#1A2332',
        primary: '#4ECCA3',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        yellowtail: ['Yellowtail', 'cursive']
      },
    },
  },
  plugins: [],
}

