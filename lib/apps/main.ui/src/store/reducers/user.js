import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actions/actionTypes";

const initialState = {
  isLoggedIn: false
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
}
