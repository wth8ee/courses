import { UserIcon } from "../icons/UserIcon";

export function AvatarPlaceholder({ className }) {
  return (
    <div
      className={`${className} aspect-square w-20 h-20 rounded-full shadow-md relative overflow-hidden bg-slate-300`}
    >
      <UserIcon
        className={`${className} w-20 h-20 absolute top-[15%] text-white`}
      />
    </div>
  );
}
