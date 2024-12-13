import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useSelector } from "react-redux";
import { aura, auraInit } from "@uiw/codemirror-theme-aura";
import { javascript } from "@codemirror/lang-javascript";
import { quietlight, quietlightInit } from "@uiw/codemirror-theme-quietlight";
import { css } from "@codemirror/lang-css";

export function CodeWindow({ code, className, onChange, jsx, cs }) {
  const theme = useSelector(state => state.theme.theme);
  let lang = html();
  if (jsx) {
    lang = javascript({ jsx: true });
  } else if (cs) {
    lang = css();
  }
  return (
    <div
      className={clsx(
        className,
        "outline outline-[1px] outline-ct3 p-2 rounded-lg",
        theme == "dark" ? "bg-[#090d18]" : "bg-[#fafcff]"
      )}
    >
      <CodeMirror
        onChange={onChange}
        value={code}
        extensions={lang}
        theme={
          theme == "light"
            ? quietlightInit({
                settings: {
                  background: "#fafcff",
                  gutterBackground: "#fafcff",
                },
              })
            : auraInit({
                settings: {
                  background: "#090d18",
                  gutterBackground: "#090d18",
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
