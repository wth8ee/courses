import clsx from "clsx";
import { useSelector } from "react-redux";

export function ProgressBar({
  a = 0,
  b = 100,
  title,
  Icon,
  unavailable,
  className,
}) {
  const theme = useSelector(state => state.theme.theme);

  const colors =
    theme == "light"
      ? ["bg-blue-200", "bg-blue-400"]
      : ["bg-blue-800", "bg-blue-500"];

  const percent = Math.trunc((a / b) * 100);
  return (
    <div
      className={clsx(
        "flex items-center gap-adpt p-adpt bg-layout shadow rounded-lg",
        unavailable && "opacity-50"
      )}
    >
      <Icon className="h-10 w-10" />
      <div
        className={clsx(
          className,
          `flex overflow-hidden bg-gradient-to-b relative h-6 w-[max(300px,50vw)] rounded-full justify-center items-center`,
          colors[0]
        )}
      >
        <div
          className={clsx("h-full absolute left-0 bg-gradient-to-b", colors[1])}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="text-[1rem] font-medium text-ct8">
        {a} / {b}
      </div>
    </div>
  );
}
