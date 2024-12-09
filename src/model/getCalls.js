export function getCalls(code, componentName) {
  const regex = new RegExp(`<${componentName}[^>]*>`, "g");
  const matches = code.match(regex);
  return matches || [];
}
