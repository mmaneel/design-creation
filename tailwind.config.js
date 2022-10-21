/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'grey': '#ffffff80',
        'greyb': '#222',

      },
      spacing: {
        '128': '38rem',
      },
      fontFamily: {
        'Display': 'Poppins, sans-serif;',
        
    },
    },
    
  plugins: [],
}
}
