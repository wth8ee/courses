import clsx from "clsx";
import { Button } from "./Button";

export function CourseCard({
  title,
  icon,
  lessons,
  className,
  link,
  unavailable,
}) {
  const buttonText = unavailable ? "Скоро..." : "К курсу";
  return (
    <div
      className={clsx(
        className,
        `flex flex-col gap-2 items-center  
      bg-layout shadow p-[max(1vw,10px)] rounded-lg hover:scale-110 
        transition-transform cursor-pointer whitespace-nowrap`
      )}
    >
      <div className="w-full flex justify-center mb-adpt">
        <div
          className={clsx(
            "w-[max(7vw,60px)] h-[max(7vw,60px)] flex justify-center items-center"
          )}
        >
          {icon}
        </div>
      </div>
      <div className="h-[1px] w-[80%] bg-ct4" />
      <div className="font-medium text-adptlg mt-adptsm">{title}</div>
      <div className="text-[max(1.2vw,12px)] mb-adptsm">Уроков: {lessons}</div>
      <div>
        <Button to={link}>{buttonText}</Button>
      </div>
    </div>
  );
}
