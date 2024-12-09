import { transform } from "@babel/standalone";
import React from "react";

export function toJs(code) {
  return transform(code, {
    presets: ["react"],
  }).code;
}
