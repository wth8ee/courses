import "normalize.css";
import DOMPurify from "dompurify";

export function JsxCompiler({ code, className }) {
  return <div id="compiler" className={className} />;
}
