import { useDispatch, useSelector } from "react-redux";
import { ProfileDropDown } from "./ProfileDropDown";
import { AvatarPlaceholder } from "./AvatarPlaceholder";
import { useEffect, useState } from "react";
import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, db, googleProvider } from "../config/firebase";
import { Button } from "./Button";
import { addDoc, collection } from "firebase/firestore";
import { getUserProgress } from "../model/getUserProgress";
import { setProgress } from "../actions/progressActions";

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
            className="max-h-12 max-w-12"
            onClick={() => setIsOpen(true)}
          />
        )}
        <div className="text-sm font-medium text-slate-700">
          {user && user.displayName}
        </div>
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
