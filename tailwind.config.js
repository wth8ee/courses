/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        adpt: "max(1vw,5px)",
        adptmd: "max(1.5vw,8px)",
        adptxl: "max(3vw,15px)",
        adptlg: "max(2vw,20px)",
      },
      margin: {
        adpt: "max(1vw,5px)",
        adptxl: "max(3vw,15px)",
        adptlg: "max(2vw,10px)",
        arrow: "calc(2.5rem + max(1vw,10px))",
        adptmd: "max(1.5vw,15px)",
        adptsm: "max(0.5vw, 5px)",
      },
      fontSize: {
        adptlg: "max(1.8vw,16px)",
        adptmd: "max(1.2vw,12px)",
        adptxl: "max(2.5vw,25px)",
        adptxxl: "max(4vw,30px)",
        adptsm: "max(0.8vw,8px)",
      },
      gap: {
        adptxl: "max(3vw,15px)",
        adpt: "max(1vw,5px)",
        adptlg: "max(2vw,10px)",
        adptmd: "max(1.5vw,8px)",
      },
      colors: {
        background: "var(--background)",
        layout: "var(--layout)",
        opposite: "var(--opposite)",
        ct1: "var(--ct1)",
        ct2: "var(--ct2)",
        ct3: "var(--ct3)",
        ct4: "var(--ct4)",
        ct5: "var(--ct5)",
        ct6: "var(--ct6)",
        ct7: "var(--ct7)",
        ct8: "var(--ct8)",
        ct9: "var(--ct9)",
      },
    },
  },
  plugins: [],
};
