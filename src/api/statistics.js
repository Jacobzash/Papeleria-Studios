import axios from "axios";
import getToken from "../utils/getToken";
import { apiVersion, basePath } from "./config";

const urlBase = `${basePath}/${apiVersion}/statistics`;

export const getStatistics = async (startDate, endDate) => {
  const url = `${urlBase}`;
  const token = getToken();
  const headers = {
    "Content-Type": "application/json",
    "x-token": token,
  };
  try {
    const response = await axios.post(url, { startDate, endDate }, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      return error.message;
    }
  }
};
