import clsx from "clsx";

export function Header({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "w-full p-[max(1vw,8px)] shadow bg-white flex items-center"
      )}
    >
      {children}
    </div>
  );
}
