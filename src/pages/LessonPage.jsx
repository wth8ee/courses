import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { lessons } from "../courses/html/lessons/lessons";
import { programs } from "../courses/programs";

export function LessonPage() {
  const params = useParams();
  const course = params.course;
  const lessonId = params.lessonId;
  const program = programs[course];

  const Lesson = lessons[lessonId - 1];

  return (
    <div className="w-full h-full flex flex-col items-center">
      <Header />
      <main className="w-full h-[calc(100vh-max(5vw,60px)-2.5rem)] px-5">
        {Lesson && <Lesson lessonId={lessonId} program={program} />}
      </main>
    </div>
  );
}
