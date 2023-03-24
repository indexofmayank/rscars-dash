import {
  ALL_FEED_FAIL,
  ALL_FEED_REQUEST,
  ALL_FEED_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/feedActionsTypes";

let feeds = [];

export const feedReducers = (state = feeds, action) => {
  switch (action.type) {
    case ALL_FEED_REQUEST:
      return {
        loading: true,
      };

    case ALL_FEED_SUCCESS:
      return {
        loading: false,
        Feeds: action.payload,
      };

    case ALL_FEED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
