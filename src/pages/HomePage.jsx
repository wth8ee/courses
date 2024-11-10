import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button } from "../components/Button";
import { CoursesSlider } from "../components/CoursesSlider";
import { Header } from "../components/Header";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

export function HomePage() {
  async function signInWithGoogle() {
    await signInWithRedirect(auth, googleProvider);
    console.log(auth.currentUser);
  }

  return (
    <div className="w-full">
      <Header className="justify-end">
        <Button onClick={signInWithGoogle}>Вход</Button>
      </Header>
      <main className="mt-5 w-full flex justify-center">
        <div className="w-[max(50vw,400px)] flex flex-col">
          <CoursesSlider />
          <Button className="self-end mr-[calc(2.5rem+max(1vw,10px))] flex items-center gap-4 whitespace-nowrap">
            <span className="flex">Все курсы</span>{" "}
            <ChevronRightIcon className="h-6" />
          </Button>
        </div>
      </main>
    </div>
  );
}
