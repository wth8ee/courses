import "normalize.css";
import DOMPurify from "dompurify";

export function HtmlCompiler({ code, className }) {
  const cleanCode = DOMPurify.sanitize(code);

  return (
    <div
      id="compiler"
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanCode }}
    />
  );
}
