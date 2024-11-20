import clsx from "clsx";
import { programs } from "../courses/programs";
import { getLessons } from "../model/getLessons";
import { CheckMarkIcon } from "../icons/CheckMarkIcon";
import { LockIcon } from "../icons/LockIcon";

export function CourseProgramExample({ className }) {
  const program = programs.react;
  const courseProgress = [34, 35, 36];

  const allLessons = getLessons(program);
  return (
    <div className={clsx(className, "bg-slate-50")}>
      {program?.map((block, i) => {
        if (i == 5) {
          return <ProgramBlock block={block} key={i} />;
        }
      })}
    </div>
  );

  function ProgramBlock({ block }) {
    return (
      <div className="flex flex-col">
        <div className="text-adptmd ml-[max(0.8vw,8px)] my-adpt font-medium">
          {block.name}
        </div>
        <div className="flex flex-col bg-transparent shadow rounded-lg gap-[1px]">
          {block?.lessons?.map((lesson, i, lessons) => {
            const id = allLessons.indexOf(lesson) + 1;
            const isCompleted = courseProgress?.includes(id);
            const lastCompleted = courseProgress?.length
              ? courseProgress?.[courseProgress.length - 1]
              : 0;
            const unavailable = lastCompleted + 1 < id;

            return (
              <div key={i}>
                <div
                  key={i}
                  className={clsx(
                    isCompleted && "text-green-600 hover:text-green-500",
                    unavailable &&
                      "text-gray-400 hover:text-gray-400 cursor-not-allowed",
                    "p-[max(0.8vw,8px)] w-full flex items-center gap-[max(1vw,10px)] justify-between bg-white text-adptsm transition-colors",
                    !unavailable && "cursor-pointer",
                    !isCompleted && !unavailable && "hover:text-slate-600",
                    i == 0 && "rounded-t-lg",
                    i == lessons.length - 1 && "rounded-b-lg"
                  )}
                >
                  <div className="flex items-center w-full gap-[max(1vw,10px)]">
                    <div className="w-[max(1vw,10px)] flex justify-center">
                      {`${id}.`}
                    </div>
                    <div className="">{lesson}</div>
                  </div>
                  {isCompleted && (
                    <CheckMarkIcon className="h-[max(0.8vw,8px)] w-[max(0.8vw,8px)]" />
                  )}
                  {unavailable && (
                    <LockIcon className="text-gray-800 h-[max(0.8vw,8px)] w-[max(0.8vw,8px)]" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
