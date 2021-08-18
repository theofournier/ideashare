import { LOGIN, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from "../actions.type";
import firebase from "firebase/app";

export const onLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN });
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error });
    }
  };

export const onLogOut = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
