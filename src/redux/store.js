import { createStore, combineReducers } from "redux";
import phoneBookReducers from "./phoneBookActions/phoneBookReducers";

const rootReducer = combineReducers({
  contacts: phoneBookReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
