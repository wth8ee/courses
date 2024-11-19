import { UserIcon } from "../icons/UserIcon";

export function AvatarPlaceholder({ className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${className} bg-slate-300 aspect-square w-20 h-20 rounded-full shadow relative overflow-hidden transition-colors`}
    >
      <UserIcon
        className={`${className} w-20 h-20 absolute top-[15%] text-white`}
      />
    </div>
  );
}
