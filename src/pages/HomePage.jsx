import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button } from "../components/Button";
import { CoursesSlider } from "../components/CoursesSlider";
import { Header } from "../components/Header";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { useSelector } from "react-redux";
import { AvatarPlaceholder } from "../components/AvatarPlaceholder";
import { ProfileDropDown } from "../components/ProfileDropDown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  const user = useSelector(state => state.user.user);

  return (
    <div className="w-full">
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
      <main className="mt-5 w-full flex justify-center">
        <div className="w-[max(80vw,400px)] flex flex-col">
          <h1 className="ml-[calc(2.5rem+max(1vw,10px))] text-adptxl font-medium">
            Наши курсы:
          </h1>
          <CoursesSlider />
          <Button
            outline
            className="self-end mr-[calc(2.5rem+max(1vw,10px))] flex items-center gap-4 whitespace-nowrap"
            onClick={() => navigate("/courses")}
          >
            <span className="flex">Все курсы</span>{" "}
            <ChevronRightIcon className="h-6" />
          </Button>
        </div>
      </main>
    </div>
  );
}
