export const buttonClasses = {
  prime: `
        py-[max(0.5vw,3px)] px-[max(1.5vw,10px)] bg-blue-500 
        text-white text-[max(1.2vw,12px)] 
        font-medium hover:bg-blue-600 transition-colors 
        rounded-[max(0.35vw,4px)] outline outline-blue-500 
        hover:outline-blue-600 outline-[1px]
    `,
  outline: `
        py-[max(0.5vw,3px)] px-[max(1.5vw,10px)] bg-transparent 
        text-blue-500 text-[max(1.2vw,12px)] font-medium 
        hover:bg-blue-500/10 transition-colors 
        rounded-[max(0.35vw,4px)] outline outline-blue-500 
        outline-[1px]
    `,
  primeDisabled: `
        py-[max(0.5vw,3px)] px-[max(1.5vw,10px)] bg-blue-500 
        text-white text-[max(1.2vw,12px)] 
        font-medium opacity-50 
        rounded-[max(0.35vw,4px)] outline outline-blue-500 
        hover:outline-blue-600 outline-[1px]
    `,
  outlineDisabled: `
        py-[max(0.5vw,3px)] px-[max(1.5vw,10px)] bg-transparent 
        text-blue-500 text-[max(1.2vw,12px)] font-medium 
        rounded-[max(0.35vw,4px)] outline outline-blue-500 
        outline-[1px] opacity-50
    `,
};
