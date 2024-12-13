// import "normalize.css";
import clsx from "clsx";
import DOMPurify from "dompurify";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export function CssResult({ html, css }) {
  const theme = useSelector(state => state.theme.theme);
  const [htmlCode, cssCode] = [html, css];

  const style = `<style>${cssCode}</style>`;
  const cleanHtmlCode = DOMPurify.sanitize(htmlCode);

  const combinedCode = `${style} ${cleanHtmlCode}`;

  return (
    <div
      className={clsx(
        "w-full overflow-y-auto outline outline-[1px] outline-ct3 p-2 rounded-lg",
        theme == "dark" ? "bg-[#090d18]" : "bg-[#fafcff]"
      )}
      dangerouslySetInnerHTML={{ __html: combinedCode }}
    />
  );
}
