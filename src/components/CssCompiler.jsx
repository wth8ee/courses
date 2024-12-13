// import "normalize.css";
import DOMPurify from "dompurify";
import React from "react";

export function CssCompiler({ code, className }) {
  console.log(className);
  const [htmlCode, cssCode] = code;

  const style = `<style>${cssCode}</style>`;
  const cleanHtmlCode = DOMPurify.sanitize(htmlCode);

  const combinedCode = `${style} ${cleanHtmlCode}`;

  return (
    <div
      id="compiler"
      className={className}
      dangerouslySetInnerHTML={{ __html: combinedCode }}
    />
  );
}
