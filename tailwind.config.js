/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FEAD04',
        secondary: '#FCFCFC',
        tertiary: '#151415',
        black: '#000',
        gray: {
          100: '#E4E4E4',
          200: '#fcfcfc',
          300: '#fcfcfb',
          400: '#fbfcfc',
          500: '#242624',
          600: '#1f1530',
          700: '#141418',
          800: '#141515',
          900: '#141415',
          1000: 'rgba(251, 252, 252, 0.8)',
        },
        darkgray: '#b2b2b2',
        darkslateblue: {
          100: '#383367',
          200: '#2e2a57',
        },

      },
      fontFamily: {
        inter: 'Inter',
        montserrat: 'Montserrat',
        roboto: 'Roboto',
        bungee: 'Bungee',
      },
      borderRadius: {
        '10xs': '3px',
        '3xs': '10px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]

}

