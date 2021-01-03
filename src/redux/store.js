import { createStore, applyMiddleware } from "redux";
import { reducer } from "./reducer";

import createSagaMiddleware from "redux-saga";

import mySaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
