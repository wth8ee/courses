import { useState } from "react";
import { Button } from "./Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function CoursePreview({ course, progress, courseKey, open }) {
  const [showIcon, setShowIcon] = useState(window.innerWidth >= 800);
  const user = useSelector(state => state.user.user);

  const navigate = useNavigate();

  const courseProgress = progress?.[courseKey];
  const isStarted = courseProgress?.length >= 1;

  let buttonText;
  if (course?.unavailable) {
    buttonText = "Курс недоступен";
  } else {
    buttonText = isStarted ? "Продолжить обучение" : "Начать обучение";
  }
  const lessonLink = courseProgress?.length ? courseProgress.length + 1 : 1;

  function handleStart() {
    if (user) {
      navigate(`${course.link}/${lessonLink}`);
    } else {
      open();
    }
  }

  window.addEventListener("resize", () => {
    setShowIcon(window.innerWidth >= 800);
  });

  function checkEnds(str, endings) {
    return endings.some(ending => str.endsWith(ending));
  }

  let lesson;
  if (checkEnds(String(course.lessons), ["2", "3", "4"])) {
    lesson = "урока";
  } else if (String(course.lessons).endsWith("1")) {
    lesson = "урок";
  } else {
    lesson = "уроков";
  }

  return (
    <div
      className={`w-full flex bg-layout shadow 
        p-adptxl rounded-xl gap-adptxl items-center`}
    >
      <div className="min-w-[max(50%,300px)]">
        <div className="font-medium text-adptxxl mb-[max(2vw,15px)] flex gap-adptxl">
          {!showIcon && (
            <div className="flex justify-center items-center">
              <course.icon className="h-10 w-10" />
            </div>
          )}
          {course.title} - Бесплатный курс
        </div>
        <div className="text-[max(1.2vw,12px)] text-ct6 mb-[max(2vw,15px)]">
          {course.largeDescription}
        </div>
        <div className="text-adptmd text-ct5 mb-[max(2vw,30px)] font-light">
          {course.lessons} {lesson} с практикой в браузере
        </div>
        <Button
          className="text-[max(1.2vw,16px)]"
          disabled={course?.unavailable}
          onClick={handleStart}
        >
          {buttonText}
        </Button>
      </div>
      {showIcon && (
        <div className="h-full min-w-[30%] flex justify-center items-center">
          <div className="w-full aspect-square">
            <course.icon className="h-full w-full" />
          </div>
        </div>
      )}
    </div>
  );
}
