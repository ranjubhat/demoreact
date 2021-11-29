import { combineReducers } from "redux";
import { countReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  count: countReducer
});
