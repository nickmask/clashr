import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools());

// sagaMiddleware.run(rootSagas);

export default store;
