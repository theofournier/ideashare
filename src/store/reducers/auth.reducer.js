import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../actions.type";

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoggingIn: false,
  error: {},
  success: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggingIn: true };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        user: action.payload,
        error: {},
        success: {},
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload,
        user: null,
        success: {},
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
