import {
  LOGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "../actions.type";
import {
  createUserWithEmailAndPassword,
  logout,
  signInWithEmailAndPassword,
} from "../../services/auth.service";

export const onLogin =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({ type: LOGIN });
      const user = await signInWithEmailAndPassword({ email, password });
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
      const user = await createUserWithEmailAndPassword({
        firstname,
        lastname,
        email,
        password,
      });
      dispatch({ type: REGISTER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error });
    }
  };

export const onLogOut = () => async (dispatch) => {
  await logout();
  dispatch({ type: LOGOUT });
};
