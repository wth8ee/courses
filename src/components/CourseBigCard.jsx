import clsx from "clsx";
import { Button } from "./Button";

export function CourseBigCard({
  title,
  icon,
  lessons,
  description,
  className,
  link,
  unavailable,
}) {
  const buttonText = unavailable ? "Скоро..." : "К курсу";
  return (
    <div
      className={clsx(
        className,
        `flex flex-col gap-4 items-center 
        bg-layout shadow p-6 rounded-lg justify-between 
        transition-transform cursor-pointer max-w-xs`
      )}
    >
      <div className="w-full flex flex-col gap-4 items-center">
        <div className="w-full flex justify-center mb-4">
          <div className="w-[max(9vw,150px)] h-[max(9vw,150px)] flex justify-center items-center">
            {icon}
          </div>
        </div>

        <div className="h-[1px] w-[80%] bg-ct4 mb-4" />

        <div className="font-medium text-2xl text-center mb-2">{title}</div>

        <div className="text-md text-ct7 mb-2">Уроков: {lessons}</div>

        {description && (
          <p className="text-sm text-ct6 mb-4 text-center">{description}</p>
        )}
      </div>

      <Button className="text-[max(1.2vw,20px)]" to={link}>
        {buttonText}
      </Button>
    </div>
  );
}
