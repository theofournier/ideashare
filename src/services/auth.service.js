import firebase from "firebase";
import userMock from "../mock/user.json";

export const signInWithEmailAndPassword = async ({ email, password }) => {
  const user = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);

  if (user) {
    //TODO: get user from db
    await Promise((resolve) => setTimeout(resolve, 500));
    return userMock;
  }
  return null;
};

export const createUserWithEmailAndPassword = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  const user = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);

  if (user) {
    // Create user in db
    await Promise((resolve) => setTimeout(resolve, 500));
    return userMock;
  }
};

export const logout = async () => {
  await firebase.auth().signOut();
};
