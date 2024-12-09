import clsx from "clsx";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { vscodeLight } from "@uiw/codemirror-theme-vscode";
import { aura, auraInit } from "@uiw/codemirror-theme-aura";
import { useSelector } from "react-redux";
import { javascript } from "@codemirror/lang-javascript";
import { quietlight, quietlightInit } from "@uiw/codemirror-theme-quietlight";
import {
  githubLight,
  githubLightInit,
  githubDark,
  githubDarkInit,
} from "@uiw/codemirror-theme-github";
import {
  tokyoNightDay,
  tokyoNightDayInit,
} from "@uiw/codemirror-theme-tokyo-night-day";

export function CodeExample({ code, className, jsx }) {
  const theme = useSelector(state => state.theme.theme);
  return (
    <div
      className={clsx(
        className,
        "outline outline-[1px] outline-ct3 p-2 rounded-lg shadow"
      )}
    >
      <CodeMirror
        value={code}
        extensions={jsx ? javascript({ jsx: true }) : html()}
        theme={
          theme == "light"
            ? tokyoNightDayInit({
                settings: {
                  background: "#ffffff",
                  gutterBackground: "#ffffff",
                },
              })
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
