import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";

export function userLoggedIn() {
  return { type: USER_LOGGED_IN };
}

export function userLoggedOut() {
  return { type: USER_LOGGED_OUT };
}
