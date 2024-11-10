import { Button } from "./Button";

export function CourseCard({ title, icon, lessons }) {
  let color;

  if (title == "JavaScript") {
    color = "#ffea76";
  } else if (title == "HTML") {
    color = "#ff965d";
  } else if (title == "CSS") {
    color = "#51bfff";
  } else {
    color = "#000000";
  }

  return (
    <div className="flex flex-col gap-2 items-center mb-5 mt-5 bg-white shadow-md p-5 rounded-lg hover:scale-110 transition-transform cursor-pointer">
      <div className="w-full flex justify-center mb-5">
        <div className="h-20">{icon}</div>
      </div>
      <div className="font-medium text-2xl">{title}</div>
      <div>Уроков: {lessons}</div>
      <div>
        <Button>К курсу</Button>
      </div>
    </div>
  );
}
