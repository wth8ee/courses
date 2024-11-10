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
    <div
      className={`flex flex-col gap-2 items-center my-5 
      bg-white shadow p-adpt rounded-lg hover:scale-110 
        transition-transform cursor-pointer whitespace-nowrap`}
    >
      <div className="w-full flex justify-center mb-adpt">
        <div className="w-[max(7vw,70px)] h-[max(7vw,70px)] flex justify-center items-center">
          {icon}
        </div>
      </div>
      <div className="h-[1px] w-[80%] bg-slate-400" />
      <div className="font-medium text-adptxl mt-[max(0.5vw,2.5px)]">
        {title}
      </div>
      <div className="text-adptmd">Уроков: {lessons}</div>
      <div>
        <Button>К курсу</Button>
      </div>
    </div>
  );
}
