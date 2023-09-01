/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins']
      },
      colors: {
        "dark-blue" : "#1C2942"
      },
      keyframes: {
        animategradient :{
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        "gradient-text": 'animategradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [],
}

