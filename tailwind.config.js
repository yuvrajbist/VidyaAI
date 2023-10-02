/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,html}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "theme1":"#6499E9",
        "theme2":"#9EDDFF",
        "theme3":"#A6F6FF",
        "theme4":"#BEFFF7",
        "themeGray":'#9CA38F'
      },
      fontFamily: {
        'sans': ["Trebuchet MS", 'Helvetica', 'sans-serif']
      },
      backgroundImage: {
        'layeredWaves': "url('src/assets/layered-waves-haikei.svg')",
        'waveUpsideDown': "url('src/assets/wave-haikei.svg')",
        'stackedWaves': "url('src/assets/stacked-waves-haikei.svg')"
      },
      screens: {
        'xl':'1180px',
        '2xl':'1470px'
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

