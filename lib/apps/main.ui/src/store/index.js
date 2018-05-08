import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import api from "../api";

// import reducers from "./reducers";
import { helloSaga } from "./auth/login.actions";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(helloSaga, api);

export default store;
