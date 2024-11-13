import { getLessons } from "../model/getLessons";

export function LessonLayout({ left, right, task, program, lessonId }) {
  const lessons = getLessons(program);
  const lesson = lessons[lessonId - 1];

  return (
    <div className="w-full h-full flex gap-5">
      <div className="w-[50%] bg-white rounded-lg flex flex-col shadow p-5 overflow-y-auto">
        <h1 className="text-adptxl font-medium mb-5">{lesson}</h1>
        {left}
        <h2 className="text-adptxl font-medium mb-5">Задание</h2>
        {task}
      </div>
      <div className="w-[50%] bg-white shadow rounded-lg p-5 overflow-y-auto">
        {right}
      </div>
    </div>
  );
}
