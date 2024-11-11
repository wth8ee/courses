import clsx from "clsx";

export function Header({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "w-full px-[max(2vw,6px)] py-[vmax(1vw,4px)] h-[max(5vw,60px)] shadow bg-white flex items-center"
      )}
    >
      {children}
    </div>
  );
}
