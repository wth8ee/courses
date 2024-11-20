import clsx from "clsx";
import { useState } from "react";
import { NavPanel } from "./NavPanel";
import { UserProfileCard } from "./UserProfileCard";
import { ProfileDropDown } from "./ProfileDropDown";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full justify-between mb-5 px-[max(2vw,20px)] py-[max(1vw,15px)] h-[max(5vw,80px)] shadow bg-white flex items-center">
      <NavPanel />
      <UserProfileCard />
      <ProfileDropDown isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
