import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { cardReducer } from "../ducks/cards";
import { UserReducer } from "../ducks/user";
import watcherSaga from "../sagas/rootSaga";

const reducer = combineReducers({
  cards: cardReducer,
  user: UserReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);
export default store;
