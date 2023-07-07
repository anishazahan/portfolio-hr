/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E35950',
        'zink':'color: rgb(39 39 42);'
      },
    },
  },
  plugins: [require('daisyui')],
}

