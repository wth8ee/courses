import { ChevronLeftIcon } from "@heroicons/react/16/solid";

export function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon className="w-10 text-opposite" />
    </div>
  );
}
