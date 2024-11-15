import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { NavPanel } from "../components/NavPanel";
import { UserProfileCard } from "../components/UserProfileCard";
import { CoursePreview } from "../components/CoursePreview";
import { courses } from "../courses/main.js";
import { CourseProgram } from "../components/CourseProgram.jsx";
import { programs } from "../courses/programs.js";

export function CoursePage() {
  const params = useParams();
  const key = params.course;
  const course = courses[key];

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="flex w-[max(90vw,300px)] flex-col items-center gap-10 mb-5">
        <CoursePreview course={course} />
        <CourseProgram
          className="w-[max(50%,300px)] self-start"
          program={programs[key]}
          course={key}
        />
      </main>
    </div>
  );
}
