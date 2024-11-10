import clsx from "clsx";

export function Header({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "w-full px-4 py-2 h-[max(5vw,60px)] shadow bg-white flex items-center"
      )}
    >
      {children}
    </div>
  );
}
