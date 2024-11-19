import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { lessons } from "../courses/lessons.js";
import { programs } from "../courses/programs";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export function LessonPage() {
  const progress = useSelector(state => state.progress?.progress)?.progress;

  const params = useParams();
  const course = params.course;
  const lessonId = params.lessonId;
  const program = programs[course];

  const courseLessons = lessons?.[course];
  const Lesson = courseLessons?.[lessonId - 1];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <main className="w-full lg:h-[calc(100vh-max(5vw,60px)-2.5rem)] xl:h-[calc(100vh-max(5vw,60px)-2.5rem)] 2xl:h-[calc(100vh-max(5vw,60px)-2.5rem)] px-5">
        {Lesson && (
          <Lesson lessonId={lessonId} program={program} progress={progress} />
        )}
      </main>
    </div>
  );
}
