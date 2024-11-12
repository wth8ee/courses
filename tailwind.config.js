/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        adpt: "max(1vw,5px)",
        adptxl: "max(3vw,15px)",
        adptlg: "max(2vw,10px)"
      },
      margin: {
        adpt: "max(1vw,5px)",
        adptxl: "max(3vw,15px)",
        adptlg: "max(2vw,10px)"
      },
      fontSize: {
        adptlg: "max(1.8vw,16px)",
        adptmd: "max(1.2vw,12px)",
        adptxl: "max(2.5vw,25px)",
        adptxxl: "max(4vw,30px)"
      }
    },
  },
  plugins: [],
}