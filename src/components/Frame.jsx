import clsx from "clsx";

export function Frame({ className, children }) {
  return (
    <div className={clsx(className, "bg-layout shadow p-adptlg rounded-xl")}>
      {children}
    </div>
  );
}
