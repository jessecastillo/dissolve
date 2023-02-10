/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'button-sm': "url('/images/pngegg.png')"
      }
    },
  },
  plugins: [],
};
