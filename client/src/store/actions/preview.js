import * as actionTypes from "./actionTypes";
import axios from "axios";

export const previewStart = () => {
  return {
    type: actionTypes.PREVIEW_URL_START,
  };
};

export const previewSuccess = (token, userId) => {
  return {
    type: actionTypes.PREVIEW_URL_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const previewFail = (error) => {
  return {
    type: actionTypes.PREVIEW_URL_FAIL,
    error: error,
  };
};


export const preview = (previewUrl) => {
  return (dispatch) => {
    dispatch(previewStart());
    let url ="/api/url/preview";
    axios
      .post(url, previewUrl)
      .then((response) => {
        dispatch(previewSuccess(response.data));
      })
      .catch((err) => {
        dispatch(previewFail(err));
      });
  };
};

