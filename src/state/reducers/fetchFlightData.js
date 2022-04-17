import { FETCHFLIGHTDATA, POSTUSERDATA } from "../types";

const initialState = {
  flightList: [],
  data: "",
};

export const flightDataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCHFLIGHTDATA:
      return {
        ...state,
        flightList: payload,
      };
    case POSTUSERDATA:
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};
