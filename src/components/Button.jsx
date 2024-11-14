import clsx from "clsx";
import { buttonClasses } from "../styles";
import { useNavigate } from "react-router-dom";

export function Button({
  children,
  outline,
  className,
  disabled,
  onClick,
  to,
}) {
  const type = outline
    ? disabled
      ? "outlineDisabled"
      : "outline"
    : disabled
      ? "primeDisabled"
      : "prime";

  const navigate = useNavigate();

  return (
    <button
      onClick={to ? () => navigate(to) : onClick}
      className={clsx(className, buttonClasses[type])}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
