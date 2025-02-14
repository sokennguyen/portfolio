/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "fade-up": "fadeUp 0.5s ease-in",
        "fade-down": "fadeDown 0.5s ease-in",
        "fade-right": "fadeRight 0.5s ease-in",
      },
      keyframes: (theme) => ({
        fadeRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }),
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": ["1.4rem", { lineHeight: " 1rem" }],
      "4xl": ["2.1rem", { lineHeight: " 1rem" }],
      "5xl": ["2.8rem", { lineHeight: "2.5rem" }],
      "6xl": ["3.78rem", { lineHeight: "2.5rem" }],
      "7xl": [
        "4.8rem",
        {
          lineHeight: "3rem",
        },
      ],
      "8xl": [
        "6.8rem",
        {
          lineHeight: "7rem",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "8rem",
        },
      ],
      "10xl": [
        "9rem",
        {
          lineHeight: "8rem",
        },
      ],
      "11xl": [
        "11rem",
        {
          lineHeight: "8rem",
        },
      ],
    },
  },
  plugins: [
    require('./node_modules/tailwindcss-highlights'),
  ],
};
