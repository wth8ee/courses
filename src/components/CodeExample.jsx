import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { aura, auraInit } from "@uiw/codemirror-theme-aura";
import { useSelector } from "react-redux";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";
import {
  tokyoNightDay,
  tokyoNightDayInit,
} from "@uiw/codemirror-theme-tokyo-night-day";

export function CodeExample({ code, className, jsx, cs }) {
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
        "outline outline-[1px] outline-ct3 p-2 rounded-lg shadow",
        theme == "dark" ? "bg-[#090d18]" : "bg-[#fafcff]"
      )}
    >
      <CodeMirror
        value={code}
        extensions={lang}
        theme={
          theme == "light"
            ? tokyoNightDayInit({
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
