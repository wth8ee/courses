import { UserIcon } from "../icons/UserIcon";

export function AvatarPlaceholder({ className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${className} aspect-square w-20 h-20 rounded-full shadow relative overflow-hidden bg-slate-300 hover:bg-slate-200 transition-colors`}
    >
      <UserIcon
        className={`${className} w-20 h-20 absolute top-[15%] text-white`}
      />
    </div>
  );
}
