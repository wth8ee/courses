import clsx from "clsx";
import { Frame } from "./Frame";

export function MainFrame({ title, description, content, className }) {
  return (
    <Frame
      className={clsx(
        className,
        "mx-arrow flex md:flex-row flex-col gap-adptlg items-center"
      )}
    >
      <div className="md:max-w-[50%] flex flex-col justify-center items-center">
        <h3 className="text-adptxl font-medium">{title}</h3>
        <div className="h-[1px] w-[64%] bg-ct4 my-adptmd" />
        <p className="text-adptmd text-ct7 lg:w-[max(150px,80%)] mb-adptmd md:mb-0 w-[90%] text-center lg:text-left">
          {description}
        </p>
      </div>
      <div className="h-full w-full md:w-[max(50%,150px)] flex justify-center items-center">
        {!content && (
          <div className="aspect-square w-full bg-background shadow rounded-xl outline outline-[1px] outline-ct3" />
        )}
        {content && (
          <div className="overflow-hidden w-full shadow rounded-xl outline outline-[1px] outline-ct3">
            {content}
          </div>
        )}
      </div>
    </Frame>
  );
}
