import { useState } from "react";
import { Button } from "./Button";

export function CoursePreview({ course }) {
  const [showIcon, setShowIcon] = useState(window.innerWidth >= 800);

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
      className={`w-full flex bg-white shadow 
        p-adptxl rounded-xl gap-adptxl items-center`}
    >
      <div className="min-w-[max(50%,300px)]">
        <div className="font-medium text-adptxxl mb-adpt flex gap-adptxl">
          {!showIcon && (
            <div className="flex justify-center items-center">
              <course.icon className="h-10 w-10" />
            </div>
          )}
          {course.title} - Бесплатный курс
        </div>
        <div className="text-adptmd text-gray-600 mb-adptlg">
          {course.largeDescription}
        </div>
        <div className="text-adptmd text-gray-500 mb-adptxl font-light">
          {course.lessons} {lesson} с практикой в браузере
        </div>
        <Button>Начать обучение</Button>
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
