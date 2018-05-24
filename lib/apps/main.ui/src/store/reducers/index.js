import { combineReducers } from "redux";

import { TICK } from "../actions/actionTypes";

function tick(state = { tick: false }, action) {
  switch (action.type) {
    case TICK:
      console.log("Reducing", state);
      return Object.assign(
        {},
        {
          tick: !state.tick
        }
      );

    default:
      return state;
  }
}

const app = combineReducers({
  tick
});

export default app;
