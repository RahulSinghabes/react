/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          200: "#7f95ac",
          500: "#18FF6b",
          700: "#002a5a",
        },
        green: {
          400:"#3dd9cb",
        }
      },
    },
  },
  plugins: [],
}
