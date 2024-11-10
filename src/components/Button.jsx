import clsx from "clsx";
import { buttonClasses } from "../styles";

export function Button({ children, outline, className, onClick }) {
  const type = outline ? "outline" : "prime";

  return (
    <button onClick={onClick} className={clsx(className, buttonClasses[type])}>
      {children}
    </button>
  );
}
