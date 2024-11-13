import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";

export function CodeExample({ code, className }) {
  return (
    <div
      className={clsx(
        className,
        "outline outline-[1px] outline-slate-300 p-2 rounded-lg"
      )}
    >
      <CodeMirror
        value={code}
        extensions={html()}
        theme={vscodeLight}
        basicSetup={{
          foldGutter: false,
          lineNumbers: false,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}
