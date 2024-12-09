import { countOccurrences } from "./countOccurences";

export function extractComponent(code, name, k = 2) {
  if (!code || !code?.includes("function") || typeof code != "string") {
    return;
  } else if (countOccurrences(code, "(") != countOccurrences(code, ")")) {
    return;
  } else if (countOccurrences(code, "{") != countOccurrences(code, "}")) {
    return;
  } else if (countOccurrences(code, "[") != countOccurrences(code, "]")) {
    return;
  } else if (name) {
    if (!code.includes(name)) {
      return;
    }
  }

  let roundOpened = false;
  let roundClosed = false;

  let newCode = code;

  let component = "";

  function getComponent(code) {
    component = "";
    roundClosed = false;
    roundOpened = false;
    const stack = [];
    for (let i = 0; i < code.length; i++) {
      const s = code[i];
      if (s == " " || s == "(") {
        if (
          component.split(" ").filter(el => !!el).length == 2 &&
          !roundOpened
        ) {
          if (
            component
              .split(" ")
              .filter(el => !!el)[1]
              .split("")
              .filter(s => !"(){}".includes(s))
              .join("") != name
          ) {
            return i;
          }
        }
        if (s == "(") {
          roundOpened = true;
        }
      }
      component += s;
      if (s == ")") {
        roundClosed = true;
      }
      if (roundClosed) {
        if (s == "{") {
          stack.push(s);
        } else if (s == "}") {
          if (stack.length) {
            stack.pop();
          }
          if (stack.length == 0) {
            break;
          }
        }
      }
    }
    return component;
  }

  for (let i = 0; i < k; i++) {
    while (!newCode.startsWith("function")) {
      newCode = newCode?.slice(1);
    }
    const possibleComponent = getComponent(newCode);
    if (typeof possibleComponent == "number") {
      newCode = newCode.slice(possibleComponent);
      if (!newCode.includes("function")) {
        return false;
      }
    } else if (typeof possibleComponent == "string") {
      component = possibleComponent;
    }
  }

  if (!name) {
    return "Component" + component;
  }
  return component;
}
