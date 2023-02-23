/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#202024',
      },
      fontFamily: {
        regular: 'Roboto_400_Regular',
        medium: 'Roboto_500_Medium',
        bold: 'Roboto_700_Bold',
        extrabold: 'Roboto_900_Black',
      },
    },
    plugins: [],
  }
}
