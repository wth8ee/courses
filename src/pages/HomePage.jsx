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

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  const user = useSelector(state => state.user.user);

  return (
    <div className="w-full">
      <Header className="justify-end">
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
          <CoursesSlider />
          <Button
            outline
            className="self-end mr-[calc(2.5rem+max(1vw,10px))] flex items-center gap-4 whitespace-nowrap"
          >
            <span className="flex">Все курсы</span>{" "}
            <ChevronRightIcon className="h-6" />
          </Button>
        </div>
      </main>
    </div>
  );
}
