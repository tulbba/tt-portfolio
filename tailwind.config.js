/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      'header': ['Chromate-Regular', 'serif'],
      'body': ['CabinetGrotesk-Regular', 'sans-serif'],
      'bold': ['CabinetGrotesk-Bold', 'sans-serif'],
    },
    colors: {
      'white': '#edeced',
      'black': '#131313',
      'orange': 'rgb(253 186 116)'
    },
    gridTemplateColumns: {
      'mobile': 'repeat(2, 100px)',
      'smdesktop': 'repeat(3, 150px)',
      'lgdesktop': 'repeat(4, 175px)',
      'jemma-desktop': 'repeat(2, auto)'
    }
  },
  plugins: [],
}
