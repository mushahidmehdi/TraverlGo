import { FETCHFLIGHTDATA } from "../types";

const initialState = {
  flightList: [],
};

export const flightDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHFLIGHTDATA:
      return {
        ...state,
        flightList: payload,
      };
    default:
      return state;
  }
};
