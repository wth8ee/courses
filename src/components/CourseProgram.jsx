import clsx from "clsx";
import { getLessons } from "../model/getLessons";
import { useNavigate } from "react-router-dom";

export function CourseProgram({ program, course, className }) {
  if (!program?.length) {
    return;
  }

  const navigate = useNavigate();

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
            const id = allLessons.indexOf(lesson) + 1;
            return (
              <div key={i}>
                <div
                  key={i}
                  className={clsx(
                    "p-[max(1.5vw,10px)] bg-white text-adptmd cursor-pointer hover:text-slate-500 transition-colors",
                    i == 0 && "rounded-t-lg",
                    i == lessons.length - 1 && "rounded-b-lg"
                  )}
                  onClick={() => navigate(`/courses/${course}/${id}`)}
                >
                  {id}. {lesson}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
