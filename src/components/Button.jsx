import clsx from "clsx";
import { buttonClasses } from "../styles";
import { useNavigate } from "react-router-dom";

export function Button({ children, outline, className, onClick, to }) {
  const type = outline ? "outline" : "prime";

  const navigate = useNavigate();

  return (
    <button
      onClick={to ? () => navigate(to) : onClick}
      className={clsx(className, buttonClasses[type])}
    >
      {children}
    </button>
  );
}
