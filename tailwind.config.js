/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      'lota-grotesque': ['Lota Grotesque Alt 1', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        checked: "url('./assets/icons/check.svg')",
      },
      colors: {
        grey: '#EAEEF4',
        'main-blue': '#37459D',
        'light-blue': '#1CA7EC',
        'light-grey': '#D1D5DB',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'grey-900': '#111928',
      },
    },
  },
  plugins: [],
};
