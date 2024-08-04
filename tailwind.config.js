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
      },
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": ["1.4rem", { lineHeight: " 1rem" }],
      "5xl": ["2.8rem", { lineHeight: "2.5rem" }],
      "6xl": ["3.78rem", { lineHeight: "2.5rem" }],
      "7xl": [
        "4.8rem",
        {
          lineHeight: "3rem",
        },
      ],
      "8xl": [
        "5.8rem",
        {
          lineHeight: "3rem",
        },
      ],
      "9xl": [
        "11rem",
        {
          lineHeight: "8rem",
        },
      ],
    },
  },
  plugins: [],
};
