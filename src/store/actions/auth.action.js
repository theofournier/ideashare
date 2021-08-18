import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions.type";
import firebase from "firebase";

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

export const onRegister =
  ({ firstname, lastname, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: REGISTER });
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      dispatch({ type: REGISTER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    }
  };

export const onLogOut = () => async (dispatch) => {
  await firebase.auth().signOut();
  dispatch({ type: LOGOUT });
};
