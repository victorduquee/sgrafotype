/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{vue,html,js,sass}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "Arial", "sans-serif"],
        poppins: ["Poppins", "Arial", "sans-serif"],
        sgrafotype: ["SGrafoType"],
        satoshi: ["Satoshi", "Arial", "sans-serif"]
      },
      fontSize: {
        '32': '32px',  // Tamaño de fuente personalizado
      },
      colors: {
        'naranja': {
          50: '#ff904f',
          100: '#FF9C63',
          200: '#FFA976',
          300: '#FFB58A',
          400: '#FFC19D',
          500: '#FFCEB1',
          600: '#FFDAC4',
          700: '#FFE6D8',
          800: '#FFF3EB',
          900: '#ffffff',
        },
        'azuloscuro': {
          50: '#002f6c',
          100: '#1C467C',
          200: '#395D8D',
          300: '#55749D',
          400: '#718BAD',
          500: '#8EA3BE',
          600: '#AABACE',
          700: '#C6D1DE',
          800: '#E3E8EF',
          900: '#ffffff',
        }
      }
    },
    
  },
  plugins: [],
};
