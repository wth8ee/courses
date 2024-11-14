import { useState } from "react";
import { getLessons } from "../model/getLessons";
import { CodeExample } from "./CodeExample";
import { CodeWindow } from "./CodeWindow";
import { HtmlCompiler } from "./HtmlCompiler";

export function LessonLayout({ left, code, task, program, lessonId }) {
  const [userCode, setUserCode] = useState(code || "");

  const lessons = getLessons(program);
  const lesson = lessons[lessonId - 1];

  const handleChange = (value, viewDate) => {
    setUserCode(value);
  };

  return (
    <div className="w-full h-full flex gap-5 lg:flex-nowrap flex-wrap">
      <div className="w-[max(50%,400px)] flex-grow bg-white rounded-lg flex flex-col shadow p-5 overflow-y-auto">
        <h1 className="text-adptxl font-medium mb-5">{lesson}</h1>
        {left}
        <h2 className="text-adptxl font-medium mb-5">Задание</h2>
        {task}
      </div>
      <div className="w-[max(50%,400px)] min-h-[500px] flex flex-col gap-5 flex-grow bg-white shadow rounded-lg p-5 overflow-y-auto mb-5 lg:mb-0">
        <CodeWindow
          code={userCode}
          onChange={handleChange}
          className="w-full h-[max(calc(50%-0.625rem),300px)]"
        />
        <HtmlCompiler
          code={userCode}
          className="w-full h-[max(calc(50%-0.625rem),300px)] outline lg:h-[max(calc(50%-0.625rem),300px)] outline-[1px] outline-slate-300 p-2 rounded-lg"
        />
      </div>
    </div>
  );
}
