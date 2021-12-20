const theme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx,json,css}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...theme.fontFamily.sans],
      },
    },
  },
};
