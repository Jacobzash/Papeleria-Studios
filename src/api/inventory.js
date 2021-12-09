import axios from "axios";
import getToken from "../utils/getToken";
import { apiVersion, basePath } from "./config";

const urlBase = `${basePath}/${apiVersion}/inventory`;

export const getInventoryApi = async () => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};

export const deleteInventoryApi = async (id) => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  try {
    const response = await axios.delete(url, {
      headers,
      data: { id },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
