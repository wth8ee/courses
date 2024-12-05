import { CodeWindow } from "./CodeWindow";
import { HtmlCompiler } from "./HtmlCompiler";
import { ReactCompiler } from "./ReactCompiler";

export function CodingTaskArea({ userCode, handleChange, course }) {
  return (
    <>
      <CodeWindow
        jsx={course == "react"}
        code={userCode}
        onChange={handleChange}
        className="w-full min-h-[300px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow"
      />
      {course == "html" && (
        <HtmlCompiler
          code={userCode}
          className="w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg"
        />
      )}
      {course == "react" && (
        <ReactCompiler className="w-full min-h-[200px] max-h-[max(50vw,500px)] overflow-y-auto flex-grow outline outline-[1px] outline-ct3 p-2 rounded-lg" />
      )}
    </>
  );
}
