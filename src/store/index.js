import { createStore, combineReducers } from "redux";
import modals from "./modals/reducer";

const reducer = combineReducers({
  modals,
});

const store = createStore(reducer);

export default store;
