import { combineReducers } from "redux";
import { flightDataReducer } from "./fetchFlightData";

// COMBINED REDUCERS
const reducers = {
  flightDataReducer,
};

export default combineReducers(reducers);
