import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";

export function userLoggedIn() {
  console.log("Action firing");
  return { type: USER_LOGGED_IN };
}

export function userLoggedOut() {
  console.log("Action firing");
  return { type: USER_LOGGED_OUT };
}
