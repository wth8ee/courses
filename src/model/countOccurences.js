export function countOccurrences(str, char) {
  let count = 0;
  for (let s of str) {
    if (s == "char") {
      count += 1;
    }
  }
  return count;
}
