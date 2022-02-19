import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8888/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const auth = async () => {
  const response = await apiClient.get(`/`);

  return response;
};

type Params = {
  oauth_token: string;
  oauth_verifier: string;
};

export const result = async (params: Params) => {
  const response: string = await apiClient.get(`/result`, {
    params: params,
  });

  return response;
};
