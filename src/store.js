import { createStore, combineReducers } from "redux";
import { voters } from "./reducers/voterReducer";
import { elections } from "./reducers/electionReducer";

export const store = createStore(
  combineReducers({ voters, elections }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
