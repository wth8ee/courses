import { signInWithGoogle } from "../model/signInWithGoogle";
import { Button } from "./Button";

export function WarningElement({ warning }) {
  return (
    <div className="w-[max(min,300px)] p-5 text-ct7 rounded-lg text-center text-adptxl gap-5 flex flex-col items-center">
      {warning == "noauth" && (
        <>
          <div>Войдите для продолжения:</div>
          <div className="h-[1px] w-[80%] bg-ct5" />
          <Button lg onClick={signInWithGoogle}>
            Войти
          </Button>
        </>
      )}
      {warning == "noaccess" && (
        <>
          <div>Вы еще не можете пройти этот урок</div>
          <div className="h-[1px] w-[80%] bg-ct5" />
          <Button lg to="/">
            Главная
          </Button>
        </>
      )}
      {warning == "nolesson" && (
        <>
          <div>Урок все еще в разработке</div>
          <div className="h-[1px] w-[80%] bg-ct5" />
          <Button lg to="/">
            Главная
          </Button>
        </>
      )}
    </div>
  );
}
