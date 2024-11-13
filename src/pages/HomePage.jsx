import { CoursesSlider } from "../components/CoursesSlider";
import { Header } from "../components/Header";
import { ProfileDropDown } from "../components/ProfileDropDown";
import { useState } from "react";
import { UserProfileCard } from "../components/UserProfileCard";
import { NavPanel } from "../components/NavPanel";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <Header />
      <main className="mt-5 w-full flex justify-center">
        <div className="w-[max(80vw,400px)] flex flex-col">
          <h1 className="ml-[calc(2.5rem+max(1vw,10px))] text-adptxl font-medium">
            Наши курсы:
          </h1>
          <CoursesSlider />
        </div>
      </main>
    </div>
  );
}
