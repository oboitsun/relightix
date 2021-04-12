module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: { '10p': '5%', 480: '480px' },
      borderRadius: { 60: '60px', 100: '100%', 10: '10%', 40: '40px' },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      lineHeight: {
        80: '80px',
      },
      boxShadow: {
        semi: '0px 0px 108px 0px rgba(0,0,0,0.08)',
      },
      gridAutoColumns: {
        sq: 'minmax(33%, 1fr)',
      },
      gridAutoRows: {
        sq: 'minmax(33%, 1fr)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
