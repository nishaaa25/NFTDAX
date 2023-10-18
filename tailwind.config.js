// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

 /** @type {import('tailwindcss').Config} */
 module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['42px', '58px'],
      '6xl': ['62px', '72px']
    },
    extend: {
      fontFamily:{
        "poppins" : ['Poppins', 'sans-serif']
      },
      colors: {
        'black': '#000000',
        "white": "#ffffff",
        "grayDark":"#111827"
      },
    },
  },
  plugins: [],
}