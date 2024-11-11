import { useSelector } from "react-redux";
import { CourseCard } from "../components/CourseCard";
import { Header } from "../components/Header";
import { CssIcon } from "../icons/CssIcon";
import { FirebaseIcon } from "../icons/FirebaseIcon";
import { HtmlIcon } from "../icons/HtmlIcon";
import { JsIcon } from "../icons/JsIcon";
import { NodejsIcon } from "../icons/NodejsIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { ReduxIcon } from "../icons/ReduxIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { TsIcon } from "../icons/TsIcon";
import { AvatarPlaceholder } from "../components/AvatarPlaceholder";
import { ProfileDropDown } from "../components/ProfileDropDown";
import { Button } from "../components/Button";
import { useState } from "react";
import { courses } from "../constants";
import { CourseBigCard } from "../components/CourseBigCart";

export function CoursesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.user.user);

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  const coursesKeys = Object.keys(courses);

  return (
    <div className="w-full flex flex-col items-center">
      <Header className="justify-between mb-5">
        <nav>
          <ul className="flex gap-[max(2vw,10px)] text-adptlg text-slate-700 transition-colors">
            <li>
              <a className="hover:text-slate-500 transition-colors" href="/">
                Главная
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-500 transition-colors"
                href="/courses"
              >
                Курсы
              </a>
            </li>
          </ul>
        </nav>
        {!user && (
          <Button className="text-[max(1.2vw,16px)]" onClick={signInWithGoogle}>
            Вход
          </Button>
        )}
        {user && (
          <AvatarPlaceholder
            onClick={() => setIsOpen(true)}
            className="h-[calc(max(5vw,60px)-1rem)] w-[calc(max(5vw,60px)-1rem)] cursor-pointer"
          />
        )}
        <ProfileDropDown isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </Header>
      <main className="w-full flex flex-col items-center">
        <h1 className="text-adptxl mb-5 font-medium">
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
