import { ChevronRightIcon } from "@heroicons/react/16/solid";

export function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon className="w-10 text-black" />
    </div>
  );
}
