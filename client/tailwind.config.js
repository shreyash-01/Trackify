/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'fira': ['Fira Sans', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif'],      
      },
      backgroundImage:{
        'login':"url('./assets/login-page.png')",
        'nike':"url('./assets/images/nike.jpg')",
      }

    },
  },
  plugins: [],
}

