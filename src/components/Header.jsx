import clsx from "clsx";

export function Header({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "w-full p-2 h-[max(5vw,40px)] shadow bg-white flex items-center"
      )}
    >
      {children}
    </div>
  );
}
