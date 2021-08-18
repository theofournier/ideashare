import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions.type";

export const initialState = {
  user: {},
  isLoggedIn: false,
  isLoggingIn: false,
  isRegisteringIn: false,
  error: {
    login: {},
    register: {},
  },
  success: {
    login: {},
    register: {},
  },
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
        error: { ...state.error, login: {} },
        success: {},
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: { ...state.error, login: action.payload },
        user: null,
        success: {},
      };
    case REGISTER:
      return { ...state, isRegisteringIn: true };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegisteringIn: false,
        isLoggedIn: true,
        user: action.payload,
        error: { ...state.error, register: {} },
        success: {},
      };
    case REGISTER_ERROR:
      return {
        ...state,
        isRegisteringIn: false,
        isLoggedIn: false,
        error: { ...state.error, register: action.payload },
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
