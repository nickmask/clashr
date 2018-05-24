import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools());

// sagaMiddleware.run(rootSagas);

export default store;
