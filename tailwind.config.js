// > tailwind.config

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "576px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "991px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "992px", max: "1200px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1201px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        main: ["SFPRO"],
        footer1: ["Poppins"],
        footer2: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#fff",
        secondary: "#000",
        gray: "#777",
        gray1: "#767676",
        gray2: "#727272",
        gray3: "#686868",
        gray4: "#878787",
        gray5: "#7C7C7C",
        gray6: "#585858",
        gray7: "#D7D7D7",
        gray8: "#969696",
        gray9: "#D4D4D4",
        gray10: "#C0C0C0",
        gray11: "#565656",
        gray12: "#C8C8C8",
        customGray: "#BDBDBD",
        transparentGray: "#60606061",
        green: "#32AF4E",
        lightGreen: "#5AAC41",
        red: "#CA1717",
        orange: "#FFA14E",
      },
      fontSize: {
        60: "3.75em",
        56: "3.5rem",
        54: "3.375rem",
        50: "3.125rem",
        48: "3rem",
        46: "2.875rem",
        44: "2.75rem",
        40: "2.5rem",
        38: "2.375rem",
        36: "2.25rem",
        34: "2.125rem",
        32: "2rem",
        30: "1.875rem",
        28: "1.75rem",
        26: "1.625rem",
        25: "1.5625rem",
        22: "1.375rem",
        20: "1.25rem",
        18: "1.125rem",
        16: "1rem",
        15: "0.9375rem",
        14: "0.875rem",
        12: "0.75rem",
        10: "0.625rem",
        8: "0.5rem",
      },
    },
  },
};
