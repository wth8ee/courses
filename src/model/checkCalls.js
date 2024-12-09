function checkCalls(code, componentName) {
  const regex = new RegExp(`<${componentName}(\\s|>)`, "g");
  const matches = code.match(regex);
  return matches ? matches.length : 0;
}
