// ACTION CREATOR

import { FETCHFLIGHTDATA, POSTUSERDATA } from "../types";

const flightListURL =
  "https://sd26cjicx5izxcazmcjs6f6hpi0zcexq.lambda-url.eu-central-1.on.aws/";

const UserDataURL =
  "https://zitfutnmyicch2zrixpqkp6l6u0hfwcz.lambda-url.eu-central-1.on.aws/";

// Feching all User data from url flightListURL
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

// Posting passenger data on UserDataURL
export const passengerDetail =
  ({ name, surname, email, address }) =>
  async (dispatch) => {
    const body = JSON.stringify({ name, surname, email, address });
    try {
      const postUserData = await fetch(UserDataURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: body,
      });
      const data = await postUserData.json();
      dispatch({
        type: POSTUSERDATA,
        payload: data,
      });
    } catch (err) {
      console.error(err);
    }
  };
