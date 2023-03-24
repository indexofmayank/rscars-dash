import {
  TEST_FAIL,
  TEST_REQUEST,
  TEST_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/testActionsTypes";

let testText= "";

export const testReducers = (state = testText, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return {
        loading: true,
        testText: null,
      };
    case TEST_SUCCESS:
      return {
        loading: false,
        testText: action.payload,
      };
    case TEST_FAIL:
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
