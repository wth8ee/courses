import clsx from "clsx";
import { getLessons } from "../model/getLessons";

export function CourseProgram({ program, className }) {
  if (!program?.length) {
    return;
  }

  const allLessons = getLessons(program);

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
            return (
              <div key={i}>
                <div
                  key={i}
                  className={clsx(
                    "p-[max(1.5vw,10px)] bg-white text-adptmd",
                    i == 0 && "rounded-t-lg",
                    i == lessons.length - 1 && "rounded-b-lg"
                  )}
                >
                  {allLessons.indexOf(lesson) + 1}. {lesson}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
