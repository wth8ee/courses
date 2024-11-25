import { useState } from "react";
import { getLessons } from "../model/getLessons";
import { CodeWindow } from "./CodeWindow";
import { HtmlCompiler } from "./HtmlCompiler";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import { programs } from "../courses/programs";
import { courses } from "../courses/main.js";
import { updateProgress } from "../model/updateProgress.js";
import { useDispatch, useSelector } from "react-redux";
import { ReactCompiler } from "./ReactCompiler.jsx";

export function LessonLayout({
  test,
  left,
  code,
  task,
  program,
  lessonId,
  progress,
}) {
  const [userCode, setUserCode] = useState(code || "");
  const user = useSelector(state => state.user.user);
  const theme = useSelector(state => state.theme.theme);

  const lessons = getLessons(program);
  const lesson = lessons[lessonId - 1];
  let course;
  for (let key in programs) {
    if (programs[key] == program) {
      course = key;
    }
  }

  const courseProgress = progress?.[course];
  const nextAvailable = courseProgress?.includes(Number(lessonId));

  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toNext = () => {
    navigate(`/courses/${course}/${+lessonId + 1}`);
  };

  const toPrev = () => {
    navigate(`/courses/${course}/${+lessonId - 1}`);
  };

  const check = () => {
    if (test()) {
      setCompleted(true);
      if (user) {
        updateProgress(user.email, course, lessonId, dispatch);
      }
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
      <div className="w-[max(50%,400px)] flex-grow bg-layout rounded-lg flex flex-col shadow p-5 overflow-y-auto">
        <div className="mb-2 text-adptmd text-ct5">
          <a className="cursor-pointer underline" href={courses[course]?.link}>
            {courses[course]?.title}
          </a>{" "}
          - {lessonId}/{courses[course]?.lessons}
        </div>
        <h1 className="text-adptxl text-ct7 font-medium mb-5 mt-0">{lesson}</h1>
        <div className="text-ct6">{left}</div>
        <h2 className="text-adptxl text-ct7 font-medium mb-5">Задание</h2>
        <div className="text-ct6">{task}</div>
      </div>
      <div className="w-[max(50%,400px)] min-h-[500px] flex flex-col gap-5 flex-grow bg-layout shadow rounded-lg p-5 overflow-y-auto mb-5 lg:mb-0">
        <CodeWindow
          code={userCode}
          onChange={handleChange}
          className="w-full min-h-[300px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow"
        />
        {course == "html" && (
          <HtmlCompiler
            code={userCode}
            className="w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg"
          />
        )}
        {course == "react" && (
          <ReactCompiler className="w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg" />
        )}
        <div className="flex gap-5 justify-center">
          <Button onClick={toPrev} disabled={lessonId < 2} outline>
            Предыдущий
          </Button>
          <Button onClick={check} className={buttonColor}>
            {buttonText}
          </Button>
          <Button
            onClick={toNext}
            disabled={lessonId == lessons.length || !nextAvailable}
            outline
          >
            Следующий
          </Button>
        </div>
      </div>
    </div>
  );
}
