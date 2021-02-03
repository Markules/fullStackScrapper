import * as actionTypes from "../actions/actionTypes";

import { updateObject } from "../../shared/utility";

const initalState = {
  url: null,
  error: null,
  loading: null,
  data: null,
};

const previewStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const previewSuccess = (state, action) => {
  return updateObject(state, {
    data: action,
    error: null,
    loading: false,
  });
};

const previewFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};


const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.PREVIEW_URL_START:
      return previewStart(state, action);
    case actionTypes.PREVIEW_URL_SUCCESS:
      return previewSuccess(state, action);
    case actionTypes.PREVIEW_URL_FAIL:
      return previewFail(state, action);

    default:
      return state;
  }
};

export default reducer;
