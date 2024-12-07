import { Button } from "../components/Button";

export function NotFoundPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[max(min,300px)] p-5 text-ct7 rounded-lg text-center text-adptxl gap-5 flex flex-col items-center">
        <div>Упс... Страница не найдена</div>
        <div className="h-[1px] w-[80%] bg-ct5" />
        <Button lg to="/">
          Главная
        </Button>
      </div>
    </div>
  );
}
