import clsx from "clsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function ProgressBar({
  a = 0,
  b = 100,
  Icon,
  unavailable,
  className,
  link,
}) {
  const theme = useSelector(state => state.theme.theme);

  const navigate = useNavigate();

  const colors =
    theme == "light"
      ? ["bg-blue-200", "bg-blue-400"]
      : ["bg-blue-800", "bg-blue-500"];

  let percent = String(((a / b) * 100).toFixed(2));
  if (percent[percent.length - 1] == "0") {
    percent = percent.slice(0, percent.length - 1);
  }
  if (percent[percent.length - 1] == "0") {
    percent = percent.slice(0, percent.length - 1);
  }
  if (percent[percent.length - 1] == ".") {
    percent = percent.slice(0, percent.length - 1);
  }
  return (
    <div
      className={clsx(
        "flex items-center gap-[max(10px,1vw)] p-[max(1vw,10px)] bg-layout shadow rounded-lg justify-between",
        unavailable && "opacity-50"
      )}
    >
      <div
        onClick={() => navigate(link)}
        className="h-[max(2.1vw,20px)] w-[max(2.1vw,20px)]"
      >
        <Icon className="h-[max(2.1vw,20px)] w-[max(2.1vw,20px)] cursor-pointer" />
      </div>
      <div
        className={clsx(
          className,
          `flex overflow-hidden bg-gradient-to-b relative h-[max(1.2vw,10px)] w-[max(150px,50vw)] rounded-full justify-center items-center`,
          colors[0]
        )}
      >
        <div
          className={clsx("h-full absolute left-0 bg-gradient-to-b", colors[1])}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      <div className="text-[max(1vw,10px)] w-[max(4vw,40px)] font-medium text-ct8 flex flex-col items-center justify-center text-center">
        <div>
          {a} / {b}
        </div>
        <div>({percent}%)</div>
      </div>
    </div>
  );
}
