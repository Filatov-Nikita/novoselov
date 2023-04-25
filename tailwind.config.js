/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,js}"],
  safelist: ["tw-fill-secondary"],
  prefix: "tw-",
  theme: {
    extend: {
      opacity: {
        15: ".15",
      },
      borderRadius: {
        14: "0.875rem",
      },
    },
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1920px",
    },
    colors: {
      orange: "#FBB03B",
      orangeHover: "#E99512",
      white: "#F5F5F5",
      gray: "#9BA5B0",
      primary: "#F5F5F5",
      secondary: "#2F4258",
      yellow: "#F7A21F",
      blue: "#3AB2ED",
      dark: "#18283A",
      negative: "#f00",
      positive: "#0AB81B",
      "dark-line": "#2F4258",
    },
    lineHeight: {
      140: "1.4",
      120: "1.2",
      100: "1",
    },
    spacing: {
      0: "0",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      15: "15px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      25: "25px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      34: "34px",
      35: "35 px",
      40: "40px",
      48: "48px",
      60: "60px",
      80: "80px",
      120: "120px",
    },
    fontSize: {
      xl20: "96px",
      xl10: "72px",
      xl: "48px",
      lg: "36px",
      md: "24px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      xxs: "10px",
    },
    fontFamily: {
      stolz: ["stolz", "Arial", "sans-serif"],
      arial: ["Arial", "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          padding: "0 16px",
          marginRight: "auto",
          marginLeft: "auto",
          "@screen md": {
            padding: "0 35px",
          },
          "@screen lg": {
            maxWidth: "1920px",
            padding: "0 40px",
          },
        },
      });
    },
  ],
};
