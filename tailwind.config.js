/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'brown',
        'zink':'rgb(39 39 42)',
        'secondary':'brown'
      },
    },
  },
  plugins: [require('daisyui')],
}

