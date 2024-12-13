import { useSelector } from "react-redux";
import { CodeWindow } from "./CodeWindow";
import { CssCompiler } from "./CssCompiler";
import { HtmlCompiler } from "./HtmlCompiler";
import { ReactCompiler } from "./ReactCompiler";
import clsx from "clsx";

export function CodingTaskArea({ userCode, handleChange, course }) {
  const theme = useSelector(state => state.theme.theme);

  let lang = "html";
  if (course == "react") {
    lang = "jsx";
  } else if (course == "css") {
    lang = "css";
  }
  let title = "Ваш HTML код";
  if (course == "react") {
    title = "Ваш JSX код";
  } else if (course == "css") {
    title = ["Ваш HTML код", "Ваш CSS код"];
  }
  return (
    <div className="flex flex-col gap-4 p-4 h-[calc(100%-5rem)]">
      <div className="h-[calc(50%-0.5rem)]">
        {typeof title == "string" && (
          <>
            <div className="text-adptmd hl mb-4 h-6">{title}</div>
            <div className="h-[calc(100%-2.5rem)]">
              <CodeWindow
                cs={course == "css"}
                jsx={course == "react"}
                code={userCode}
                onChange={handleChange}
                className="h-full overflow-y-auto"
              />
            </div>
          </>
        )}
        {typeof title == "object" && (
          <div className="h-full flex gap-4">
            <div className="w-[calc(50%-0.5rem)]">
              <div className="text-adptmd hl mb-4 h-6">{title[0]}</div>
              <div className="h-[calc(100%-2.5rem)]">
                <CodeWindow
                  code={userCode[0]}
                  onChange={value => handleChange(value, null, "html")}
                  className="h-full overflow-y-auto overflow-x-hidden"
                />
              </div>
            </div>
            <div className="w-[calc(50%-0.5rem)]">
              <div className="text-adptmd hl mb-4 h-6">{title[1]}</div>
              <div className="h-[calc(100%-2.5rem)]">
                <CodeWindow
                  cs={true}
                  code={userCode[1]}
                  onChange={value => handleChange(value, null, "css")}
                  className="h-full overflow-y-auto overflow-x-hidden"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 h-[calc(50%-0.5rem)]">
        <div className="text-adptmd hl">Вывод</div>
        {course == "html" && (
          <HtmlCompiler
            code={userCode}
            className={clsx(
              "w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg",
              theme == "dark" ? "bg-[#090d18]" : "bg-[#fafcff]"
            )}
          />
        )}
        {course == "react" && (
          <ReactCompiler
            className={clsx(
              "w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg",
              theme == "dark" ? "bg-[#090d18]" : "bg-[#fafcff]"
            )}
          />
        )}
        {course == "css" && (
          <CssCompiler
            code={userCode}
            className={clsx(
              "w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg",
              theme == "dark" ? "bg-[#090d18]" : "bg-[#fafcff]"
            )}
          />
        )}
      </div>
    </div>
  );
}
