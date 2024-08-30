import axios from "axios";
import { BASE_URL } from "./constants";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": BASE_URL,
  },
  withCredentials: true,
});

export async function requestHandler({
  endpoint,
  method,
  body,
  headers = {},
  contentType = "application/json",
}) {
  const config = {
    method,
    url: endpoint,
  };

  if (body && contentType === "application/json") {
    config.data = JSON.stringify(body);
  } else if (body) {
    config.data = body;
  }

  try {
    const response = await api(config);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(
        error.response.data.message ||
          "API call failed without a specified error"
      );
    } else {
      throw new Error(`API call failed: ${error.message}`);
    }
  }
}

export async function uploadFileHandler({
  endpoint,
  method = "POST",
  body,
  headers = {},
  onProgress = (progress) => {},
}) {
  const url = `${BASE_URL}${endpoint}`;
  const config = {
    method,
    headers: {
      ...headers,
    },
    body: body,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        errorResponse.message || "API call failed without a specified error"
      );
    }
    return await response.json();
  } catch (error) {
    throw new Error(`API call failed: ${error}`);
  }
}

export { api };
