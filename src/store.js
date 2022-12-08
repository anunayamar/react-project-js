import { createStore, combineReducers } from "redux";
import { voters } from "./reducers/voterReducer";

export const store = createStore(
  combineReducers({ voters }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
