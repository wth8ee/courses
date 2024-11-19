import clsx from "clsx";
import { getLessons } from "../model/getLessons";
import { useNavigate } from "react-router-dom";
import { CheckMarkIcon } from "../icons/CheckMarkIcon";
import { LockIcon } from "../icons/LockIcon";

export function CourseProgram({ program, course, progress, className }) {
  if (!program?.length) {
    return;
  }

  const navigate = useNavigate();

  const allLessons = getLessons(program);
  const courseProgress = progress?.[course];

  return (
    <div className={clsx(className, "flex flex-col gap-5")}>
      {program?.map((block, i) => {
        return <ProgramBlock block={block} key={i} />;
      })}
    </div>
  );

  function ProgramBlock({ block }) {
    return (
      <div className="flex flex-col">
        <div className="text-adptlg font-medium mb-5">{block.name}</div>
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
                    "p-[max(1.5vw,10px)] flex items-center justify-between bg-white text-adptmd transition-colors",
                    !unavailable && "cursor-pointer",
                    !isCompleted && !unavailable && "hover:text-slate-600",
                    i == 0 && "rounded-t-lg",
                    i == lessons.length - 1 && "rounded-b-lg"
                  )}
                  onClick={() => {
                    if (!unavailable) {
                      navigate(`/courses/${course}/${id}`);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <div className="mr-[max(1vw,6px)] w-[max(1.7vw,16px)] flex justify-center">
                      {`${id}.`}
                    </div>
                    <div>{lesson}</div>
                  </div>
                  {isCompleted && (
                    <CheckMarkIcon className="h-[max(1.2vw,12px)] w-[max(1.2vw,12px)]" />
                  )}
                  {unavailable && (
                    <LockIcon className="text-gray-800 h-[max(1.2vw,12px)] w-[max(1.2vw,12px)]" />
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
