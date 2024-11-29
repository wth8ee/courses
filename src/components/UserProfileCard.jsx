import { useDispatch, useSelector } from "react-redux";
import { ProfileDropDown } from "./ProfileDropDown";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { useEffect, useState } from "react";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, db, googleProvider } from "../config/firebase";
import { Button } from "./Button";
import { signInWithGoogle } from "../model/signInWithGoogle";

export function UserProfileCard({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector(state => state.user.user);

  return (
    <div className={`${className} relative`}>
      <div
        className="cursor-pointer flex items-center gap-adpt"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user && (
          <AvatarPlaceholder
            className="max-h-12 max-w-12"
            onClick={() => setIsOpen(true)}
          />
        )}
        <div className="text-sm text-ct6">{user && user.displayName}</div>
      </div>

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
