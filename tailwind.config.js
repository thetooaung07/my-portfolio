module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },
    extend: {  colors: {
      green: {
        // light: '#b3bcf5',
        DEFAULT: '#00f260',
        // dark: '#202e78',
      }
    }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
