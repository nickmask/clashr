import { TICK } from "./actionTypes";

export function tick() {
  console.log("Action firing");
  return { type: TICK };
}
