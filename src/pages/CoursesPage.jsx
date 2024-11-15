import { Header } from "../components/Header";
import { courses } from "../courses/main.js";
import { CourseBigCard } from "../components/CourseBigCard";
import { UserProfileCard } from "../components/UserProfileCard";
import { NavPanel } from "../components/NavPanel";

export function CoursesPage() {
  const coursesKeys = Object.keys(courses);

  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <main className="w-full flex flex-col items-center">
        <h1 className="text-adptxl mb-5 font-medium text-center">
          Список наших бесплатных курсов:
        </h1>
        <div className="flex flex-wrap mb-5 gap-[max(1vw,10px)] w-[max(80vw,400px)] justify-center">
          {coursesKeys.map((key, i) => {
            const course = courses[key];
            return (
              <CourseBigCard
                title={course.title}
                description={course.description}
                lessons={course.lessons}
                link={course.link}
                icon={<course.icon className="h-full w-full" />}
                key={i}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
