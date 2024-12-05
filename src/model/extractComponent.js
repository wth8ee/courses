export function extractComponent(code) {
  console.log(code);
  if (!code) {
    return;
  }
  const stack = [];
  let pastRound = false;

  let newCode = code;

  let res = "";

  while (!newCode.startsWith("function")) {
    newCode = newCode?.slice(1, newCode?.length);
  }

  for (let s of newCode) {
    res += s;
    if (s == ")") {
      pastRound = true;
    }
    if (pastRound) {
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
  return res;
}
