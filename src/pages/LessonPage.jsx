import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { lessons } from "../courses/lessons.js";
import { programs } from "../courses/programs";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { WarningElement } from "../components/WarningElement.jsx";

export function LessonPage() {
  const progress = useSelector(state => state.progress?.progress)?.progress;
  const user = useSelector(state => state.user.user);

  const params = useParams();
  const course = params.course;
  const lessonId = params.lessonId;
  const program = programs[course];

  const courseLessons = lessons?.[course];
  const Lesson = courseLessons?.[lessonId - 1];

  const lessonAccess = progress?.[course]?.includes(Number(lessonId) - 1);

  let warning = null;
  if (!user) {
    warning = "noauth";
  } else if (!lessonAccess) {
    warning = "noaccess";
  } else if (!Lesson) {
    warning = "nolesson";
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <main className="w-full flex justify-center items-center lg:h-[calc(100vh-max(5vw,60px)-2.5rem)] xl:h-[calc(100vh-max(5vw,60px)-2.5rem)] 2xl:h-[calc(100vh-max(5vw,60px)-2.5rem)] px-5">
        {!warning && (
          <Lesson lessonId={lessonId} program={program} progress={progress} />
        )}
        {warning && <WarningElement warning={warning} />}
      </main>
    </div>
  );
}
