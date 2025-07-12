/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(50px) rotate(180deg)" },
          "100%": { transform: "translateY(0) rotate(360deg)" },
        },
      },
      animation: {
        move: "move 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
