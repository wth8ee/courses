import { Button } from "../components/Button";
import { CoursesSlider } from "../components/CoursesSlider";
import { Header } from "../components/Header";

export function HomePage() {
  return (
    <div className="w-full">
      <Header className="justify-end">
        <Button>Sign In</Button>
      </Header>
      <main className="mt-5 w-full flex justify-center">
        <CoursesSlider />
      </main>
    </div>
  );
}
