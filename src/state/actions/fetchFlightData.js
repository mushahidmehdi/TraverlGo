import { FETCHFLIGHTDATA } from "../types";

const flightListURL =
  "https://sd26cjicx5izxcazmcjs6f6hpi0zcexq.lambda-url.eu-central-1.on.aws/";

export const fetchFlightList = () => async (dispatch) => {
  try {
    const flightList = await fetch(flightListURL);
    const data = await flightList.json();
    dispatch({
      type: FETCHFLIGHTDATA,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};
