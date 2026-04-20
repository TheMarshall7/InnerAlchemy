/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: '#efe2d3', // Warm healing oat/plaster, not pure white
        terracotta: '#c95733', // Slightly softened terracotta
        rust: '#993d22',
        ochre: '#d48c41',
        clay: '#b17255',
        deepbrown: '#2a1f1a', // Softened dark font color
        earth: '#3d2e26', // Softened secondary dark font
        dust: '#e3cfbd', // Secondary warm background color
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'serif'], // Elegant serif like SIROCCO
        sans: ['"Outfit"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1.1' }],
        '9xl': ['8rem', { lineHeight: '1.1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
        'display': ['clamp(4rem, 10vw, 12rem)', { lineHeight: '1.1' }],
      },
      letterSpacing: {
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
    },
  },
  plugins: [],
}
