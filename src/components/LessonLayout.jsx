import { useState } from "react";
import { getLessons } from "../model/getLessons";
import { CodeExample } from "./CodeExample";
import { CodeWindow } from "./CodeWindow";
import { HtmlCompiler } from "./HtmlCompiler";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { programs } from "../courses/programs";
import { courses } from "../courses/main.js";

export function LessonLayout({ test, left, code, task, program, lessonId }) {
  const [userCode, setUserCode] = useState(code || "");

  const lessons = getLessons(program);
  const lesson = lessons[lessonId - 1];
  let course;
  for (let key in programs) {
    if (programs[key] == program) {
      course = key;
    }
  }

  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  const navigate = useNavigate();

  const toNext = () => {
    navigate(`/courses/${course}/${+lessonId + 1}`);
  };

  const toPrev = () => {
    navigate(`/courses/${course}/${+lessonId - 1}`);
  };

  const check = () => {
    if (test()) {
      setCompleted(true);
    } else {
      setFailed(true);
    }
  };

  const buttonText = completed
    ? "Пройдено"
    : failed
      ? "Не пройдено"
      : "Проверить";
  const buttonColor = completed
    ? "bg-green-500 hover:bg-green-600 outline-green-500 hover:outline-green-600"
    : failed
      ? "bg-red-500 hover:bg-red-600 outline-red-500 hover:outline-red-600"
      : "";

  const handleChange = (value, viewDate) => {
    setUserCode(value);
    setFailed(false);
    setCompleted(false);
  };

  return (
    <div className="w-full h-full flex gap-5 lg:flex-nowrap flex-wrap">
      <div className="w-[max(50%,400px)] flex-grow bg-white rounded-lg flex flex-col shadow p-5 overflow-y-auto">
        <div className="mb-2 text-adptmd text-slate-600">
          <a className="cursor-pointer underline" href={courses[course]?.link}>
            {courses[course]?.title}
          </a>{" "}
          - {lessonId}/{courses[course]?.lessons}
        </div>
        <h1 className="text-adptxl font-medium mb-5 mt-0">{lesson}</h1>
        {left}
        <h2 className="text-adptxl font-medium mb-5">Задание</h2>
        {task}
      </div>
      <div className="w-[max(50%,400px)] min-h-[500px] flex flex-col gap-5 flex-grow bg-white shadow rounded-lg p-5 overflow-y-auto mb-5 lg:mb-0">
        <CodeWindow
          code={userCode}
          onChange={handleChange}
          className="w-full min-h-[300px] flex-grow"
        />
        <HtmlCompiler
          code={userCode}
          className="w-full min-h-[200px] flex-grow outline outline-[1px] outline-slate-300 p-2 rounded-lg"
        />
        <div className="flex gap-5 justify-center">
          <Button onClick={toPrev} disabled={lessonId < 2} outline>
            Предыдущий
          </Button>
          <Button onClick={check} className={buttonColor}>
            {buttonText}
          </Button>
          <Button
            onClick={toNext}
            disabled={lessonId == lessons.length}
            outline
          >
            Следующий
          </Button>
        </div>
      </div>
    </div>
  );
}
