/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        adpt: "max(1vw,5px)"
      },
      margin: {
        adpt: "max(1vw,5px)"
      },
      fontSize: {
        adptxl: "max(1.8vw,16px)",
        adptmd: "max(1.2vw,12px)"
      }
    },
  },
  plugins: [],
}