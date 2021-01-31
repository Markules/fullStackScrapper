import * as actionTypes from "./actionTypes";
import axios from "axios";

export const previewStart = () => {
  return {
    type: actionTypes.PREVIEW_URL_START,
  };
};

export const previewSuccess = (data) => {
  return {
    type: actionTypes.PREVIEW_URL_SUCCESS,
    data: data,
    
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
    console.log(previewUrl, "actions");
    axios.post("/api/preview", {previewUrl})
      .then((response) => {
        dispatch(previewSuccess(response.data));
      })
      .catch((err) => {
        dispatch(previewFail(err));
      });
  };
};

