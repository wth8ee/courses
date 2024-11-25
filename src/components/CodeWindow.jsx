import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useSelector } from "react-redux";
import { aura, auraInit } from "@uiw/codemirror-theme-aura";
import { javascript } from "@codemirror/lang-javascript";

export function CodeWindow({ code, className, onChange }) {
  const theme = useSelector(state => state.theme.theme);
  return (
    <div
      className={clsx(
        className,
        "outline outline-[1px] outline-ct3 p-2 rounded-lg"
      )}
    >
      <CodeMirror
        onChange={onChange}
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
        basicSetup={{
          foldGutter: false,
          lineNumbers: true,
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
      />
    </div>
  );
}
