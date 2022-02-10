import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import filterReducer from "./filterReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  alert: alertReducer,
  filter: filterReducer,
  movie: movieReducer,
});

export default rootReducer;
