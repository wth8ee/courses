import { UserIcon } from "../icons/UserIcon";

export function AvatarPlaceholder({ className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${className} bg-ct4 aspect-square w-20 h-20 rounded-full shadow relative overflow-hidden outline outline-[1px] outline-ct3`}
    >
      <UserIcon
        className={`${className} w-20 h-20 absolute text-ct2 top-[15%]`}
      />
    </div>
  );
}
