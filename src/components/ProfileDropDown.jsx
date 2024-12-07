import { clsx } from "clsx";
import { signOut } from "firebase/auth";
import { createPortal } from "react-dom";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProfileDropDown({ isOpen, onClose, className }) {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  if (!isOpen) {
    return;
  }

  async function logOut() {
    signOut(auth);
    onClose();
  }

  function handleClick(e) {
    const inModal = e.target.closest("[data-id=modal]");
    if (!inModal) {
      onClose();
    }
  }

  const DropDown = (
    <div className="absolute inset-0 bg-transparent" onClick={handleClick}>
      <div
        data-id="modal"
        className={clsx(
          className,
          `absolute shadow rounded-lg right-2 w-40 top-[calc(max(5vw,80px)+0.5rem)] 
                flex flex-col gap-1 bg-layout`
        )}
      >
        <DropDownOption onClick={() => navigate("/profile")} title="Профиль" />
        <DropDownOption title="Настройки" />
        <DropDownOption onClick={logOut} title="Выйти" />
      </div>
    </div>
  );

  return createPortal(DropDown, document.getElementById("modals"));
}

function DropDownOption({ icon, title, onClick }) {
  const theme = useSelector(state => state.theme.theme);
  const classes =
    theme == "light"
      ? `text-slate-900 flex w-full items-center rounded-md 
    px-2 py-2 gap-2 cursor-pointer transition-colors text-adpt
    bg-white hover:text-white hover:bg-blue-500`
      : `text-slate-400 flex w-full items-center rounded-md 
    px-2 py-2 gap-2 cursor-pointer transition-colors text-adpt
    bg-slate-900 hover:text-white hover:bg-blue-500`;
  return (
    <div onClick={onClick} className={classes}>
      {icon && icon}
      {title}
    </div>
  );
}
