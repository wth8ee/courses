import clsx from "clsx";
import { Button } from "./Button";

export function CourseBigCard({
  title,
  icon,
  lessons,
  description,
  className,
  link,
}) {
  return (
    <div
      className={clsx(
        className,
        `flex flex-col gap-4 items-center 
        bg-white shadow p-6 rounded-lg  
        transition-transform cursor-pointer max-w-xs`
      )}
    >
      {/* Иконка */}
      <div className="w-full flex justify-center mb-4">
        <div className="w-[max(9vw,90px)] h-[max(9vw,90px)] flex justify-center items-center">
          {icon}
        </div>
      </div>

      {/* Разделитель */}
      <div className="h-[1px] w-[80%] bg-slate-400 mb-4" />

      {/* Название курса */}
      <div className="font-medium text-2xl text-center mb-2">{title}</div>

      {/* Количество уроков */}
      <div className="text-md text-gray-700 mb-2">Уроков: {lessons}</div>

      {/* Описание технологии */}
      {description && (
        <p className="text-sm text-gray-600 mb-4 text-center">{description}</p>
      )}

      {/* Кнопка */}
      <Button to={link}>К курсу</Button>
    </div>
  );
}
