module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
      rYellow: '0px 4px 30px  rgba(251, 200, 102, 0.54)',
      rPurple: '0px 4px 30px rgba(145, 79, 199, 0.56)',
      rGreen: '0px 4px 30px rgba(20, 146, 72, 0.56)',
      rBlue: '0px 4px 30px rgba(29, 174, 235, 0.34)',
      rOrange: '0px 4px 30px rgba(238, 115, 81, 0.34)',
      rNavy: '0px 4px 30px rgba(61, 110, 235, 0.36)',
    },
    extend: {
      backgroundColor: {
        rYellow: '#FBC866',
        rPurple: '#914FC7',
        rGreen: '#149248',
        rBlue: '#1DAEEB',
        rOrange: '#EE7351',
        rNavy: '#3D6EEB',
      },

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
      fontSize: {
        54: '54px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
