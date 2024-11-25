import { useState } from "react";
import { NavPanel } from "./NavPanel";
import { UserProfileCard } from "./UserProfileCard";
import { ProfileDropDown } from "./ProfileDropDown";
import { useDispatch, useSelector } from "react-redux";
import { LightThemeIcon } from "../icons/LightThemeIcon";
import { DarkThemeIcon } from "../icons/DarkThemeIcon";
import { setTheme } from "../actions/themeActions";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector(state => state.theme.theme);

  const dispatch = useDispatch();

  function changeTheme() {
    if (theme == "light") {
      dispatch(setTheme("dark"));
      localStorage.setItem("theme", "dark");
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div className="w-full justify-between mb-5 px-[max(2vw,20px)] py-[max(1vw,15px)] h-[max(5vw,80px)] shadow bg-layout flex items-center sticky top-0">
      <NavPanel />
      <div className="flex gap-8 items-center">
        <div
          onClick={changeTheme}
          className="cursor-pointer rounded-full shadow outline outline-[1px] outline-ct3"
        >
          {theme == "light" ? (
            <LightThemeIcon className="h-12 text-ct5 rounded-full shadow p-2.5" />
          ) : (
            <DarkThemeIcon className="h-12 text-ct5 rounded-full p-2.5 shadow" />
          )}
        </div>
        <UserProfileCard />
      </div>
      <ProfileDropDown isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
