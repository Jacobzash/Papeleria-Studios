import { signInApi } from "../api/auth";

export const signIn = async ({ correo, password }) => {
  const result = await signInApi(correo, password);
  return result;
};
