import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { aura, auraInit } from "@uiw/codemirror-theme-aura";
import { useSelector } from "react-redux";
import { javascript } from "@codemirror/lang-javascript";

export function CodeExample({ code, className }) {
  const theme = useSelector(state => state.theme.theme);
  return (
    <div
      className={clsx(
        className,
        "outline outline-[1px] outline-ct3 p-2 rounded-lg"
      )}
    >
      <CodeMirror
        value={code}
        extensions={javascript({ jsx: true })}
        theme={
          theme == "light"
            ? vscodeLight
            : auraInit({
                settings: {
                  background: "#0f172a",
                  gutterBackground: "#0f172a",
                },
              })
        }
        readOnly={true}
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
