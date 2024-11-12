import { Header } from "../components/Header";
import { NavPanel } from "../components/NavPanel";
import { UserProfileCard } from "../components/UserProfileCard";

export function CoursePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <Header className="justify-between mb-5">
        <NavPanel />
        <UserProfileCard />
      </Header>
      <main>
        <h1 className="font-medium text-adptxl">Some Course</h1>
      </main>
    </div>
  );
}
