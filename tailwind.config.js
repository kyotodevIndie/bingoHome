/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.js"
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

      },
      fontFamily: {
        inter: 'Inter',
        montserrat: 'Montserrat',
        roboto: 'Roboto',
        bungee: 'Bungee',
      },

    },
  },
  plugins: [require("rippleui")],
  rippleui: {
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#FEAD04",
          backgroundPrimary: "#151415",
        },
      },
      {
        themeName: "dark",
        colorScheme: "dark",
        colors: {
          primary: "#FEAD04",
          backgroundPrimary: "#151415",
        },
      },
    ],
  },
}

