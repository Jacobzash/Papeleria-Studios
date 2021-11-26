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
      return error.message;
    }
  }
};

export const refreshTokenApi = async (token) => {
  const url = `${urlBase}/auth/refreshToken`;
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  try {
    const response = await axios.post(url, {}, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
