/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom': ' 0 4px 6px rgba(0, 0, 0, 0.3)',
      },

      // box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
    },
  },
  plugins: [require('daisyui')],
  // daisyui: {
  //   styled: true,
  //   themes: true,

  //   // darkTheme: "dark",
  // },
};
