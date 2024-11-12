import { useSelector } from "react-redux";
import { ProfileDropDown } from "./ProfileDropDown";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";
import { Button } from "./Button";

export function UserProfileCard({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.user.user);

  async function signInWithGoogle() {
    await signInWithPopup(auth, googleProvider);
  }

  return (
    <div className={`${className} relative`}>
      <div
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user && (
          <AvatarPlaceholder
            className="h-12 w-12"
            onClick={() => setIsOpen(true)}
          />
        )}
        <div className="text-sm font-medium text-slate-700">
          {user && user.displayName}
        </div>
      </div>

      {/* Всплывающее меню профиля */}
      {user && isOpen && (
        <ProfileDropDown isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
      {!user && (
        <Button className="text-[max(1.2vw,16px)]" onClick={signInWithGoogle}>
          Вход
        </Button>
      )}
    </div>
  );
}
