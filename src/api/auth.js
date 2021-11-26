import axios from "axios";
import { apiVersion, basePath } from "./config";

const urlBase = `${basePath}/${apiVersion}`;

export const signInApi = async (correo, password) => {
  const url = `${urlBase}/auth/signIn`;
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.post(url, { correo, password }, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      // Something happened in setting up the request that triggered an Error
      return error.message;
    }
  }
};
