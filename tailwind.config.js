module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
    },

    boxShadow: {
      "custom-light":
        "0 4px 4px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.06)",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },
    extend: {
      textColor: {
        skin: {
          base: "var(--color-theme-1)",
          middle: "var(--color-theme-mid)",
          secondary: "var(--color-theme-2)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-theme-1)",
          middle: "var(--color-theme-mid)",
          secondary: "var(--color-theme-2)",
        },
      },
      gradientColorStops: {
        skin: {
          base: "var(--color-theme-1)",
          middle: "var(--color-theme-mid)",
          secondary: "var(--color-theme-2)",
        },
      },
     

      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
