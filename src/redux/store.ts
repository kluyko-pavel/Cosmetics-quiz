import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import quizReducer from "./reducers/quiz-reducer";
import { watcherProducts } from "./action-creators/products-action_creator";
import productsReducer from "./reducers/products-reducer";
import uiReducer from "./reducers/ui-reducer";

const sagaMiddleware = createSagaMiddleware();
function* rootSaga() {
  yield all([watcherProducts()]);
}

const store = createStore(
  combineReducers({
    quiz: quizReducer,
    products: productsReducer,
    ui: uiReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

const handleChange = () => {
  localStorage.setItem("localState", JSON.stringify(store.getState()));
};

store.subscribe(() => handleChange());

export default store;
