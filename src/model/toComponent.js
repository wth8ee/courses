import React from "react";

export function toComponent(s) {
  return eval(`(${s})`);
}
