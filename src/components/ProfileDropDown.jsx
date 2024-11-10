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
          `absolute shadow-md rounded-lg right-2 w-40 top-[calc(max(5vw,60px)+0.5rem)] 
                flex flex-col gap-1 p-1 bg-white`
        )}
      >
        <DropDownOption title="Profile" onClick={() => navigate("/profile")} />
        <DropDownOption title="Settings" />
        <DropDownOption onClick={logOut} title="Log out" />
      </div>
    </div>
  );

  return createPortal(DropDown, document.getElementById("modals"));
}

function DropDownOption({ icon, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `text-gray-900 flex w-full items-center rounded-md 
        px-2 py-2 gap-2 cursor-pointer transition-colors`,
        "bg-white hover:text-white hover:bg-blue-500"
      )}
    >
      {icon && icon}
      {title}
    </div>
  );
}
