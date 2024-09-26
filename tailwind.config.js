/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green1: '#EDF4F2', 
        olive1: '#7C8363',      
        darkgreen1: '#31473A', 
        olive2: '#1a261f', 
        darkblue1: '#283148',
      },
    },
  },
  plugins: [],
}
