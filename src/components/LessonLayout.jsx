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
import { setCode } from "../actions/codeActions.js";
import { CodingTaskArea } from "./CodingTaskArea.jsx";
import { TestTask } from "./TestTask.jsx";
import { getUserProgress } from "../model/getUserProgress.js";
import clsx from "clsx";

export function LessonLayout({
  test,
  left,
  code,
  task,
  program,
  lessonId,
  progress,
}) {
  const user = useSelector(state => state.user.user);

  const lessons = getLessons(program);
  const lesson = lessons[lessonId - 1];
  let course;
  for (let key in programs) {
    if (programs[key] == program) {
      course = key;
    }
  }

  const initialState = course == "css" ? ["", ""] : code || "";
  const [userCode, setUserCode] = useState(initialState);

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

  const check = async () => {
    let testPassed;
    if (typeof test == "function") {
      testPassed = await test(userCode);
    } else if (typeof test == "object") {
      const answerKeys = [];
      const answers = [];
      const userAnswers = [];
      for (let elem of test) {
        answerKeys.push(elem?.answer);
      }
      for (let i in test) {
        answers.push(test?.[i]?.options?.[answerKeys?.[i]]);
      }
      const testTaskElement = document.getElementById("test");
      const radios = testTaskElement.querySelectorAll("input[type=radio]");
      for (let radio of radios) {
        if (radio.checked) {
          userAnswers.push(radio.nextSibling?.textContent);
        }
      }
      let equal = answers.length == userAnswers.length;
      if (equal) {
        for (let i in answers) {
          if (answers[i] != userAnswers?.[i]) {
            equal = false;
            break;
          }
        }
      }
      testPassed = equal;
    }
    if (testPassed) {
      setCompleted(true);
      const progress = await getUserProgress(user?.email);
      const courseProgress = progress?.progress?.[course];
      if (
        user &&
        !courseProgress?.includes(Number(lessonId)) &&
        !courseProgress?.includes(String(lessonId))
      ) {
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

  const reset = () => {
    setFailed(false);
    setCompleted(false);
  };

  const handleChange = (value, viewDate, type) => {
    if (type) {
      const types = { html: 0, css: 1 };
      const newCode = userCode?.slice();
      newCode[types[type]] = value;
      setUserCode(newCode);
    } else {
      setUserCode(value);
    }
    reset();
  };

  return (
    <div className="w-full h-full flex gap-5 lg:flex-nowrap flex-wrap">
      <div className="w-[max(50%,400px)] flex-grow bg-layout rounded-lg flex flex-col shadow p-5 overflow-y-auto">
        <div className="mb-4 text-adptmd text-ct7">
          <a className="cursor-pointer underline" href={courses[course]?.link}>
            {courses[course]?.title}
          </a>{" "}
          - {lessonId}/{courses[course]?.lessons}
        </div>
        <h1 className="text-adptxl text-opposite font-medium mb-8 mt-0">
          {lesson}
        </h1>
        <div className="text-ct7 flex flex-col gap-8 text-adpt mb-8 lesson-content">
          {left}
        </div>
        <h2 className="text-adptxl text-opposite font-medium mb-8">Задание</h2>
        <div className="text-ct7 mb-8">{task}</div>
      </div>
      <div
        className={clsx(
          "w-[max(50%,400px)] relative h-full flex flex-col flex-grow bg-layout shadow rounded-lg mb-4 lg:mb-0 overflow-y-hidden"
        )}
      >
        {(typeof test == "function" || !test) && (
          <CodingTaskArea
            userCode={userCode}
            handleChange={handleChange}
            course={course}
          />
        )}
        {typeof test == "object" && <TestTask test={test} reset={reset} />}
        <ButtonField />
      </div>
    </div>
  );

  function ButtonField() {
    return (
      <div className="flex gap-4 justify-center p-4 pt-2 w-full h-[max(4vw,60px)]">
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
    );
  }
}
