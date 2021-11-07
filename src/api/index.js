import { create } from "apisauce";

const baseURL = "https://api.themoviedb.org/3/";
const PARAMS = { api_key: "4ba2c80bd43f2892ecb3349fa445015f" };
const api = create({ baseURL: baseURL, params: PARAMS });

api.addResponseTransform((response) => {
  if (response.status === 404) {
    window.location.href = "/error";
  }
});

export async function getRequest(url, params = PARAMS) {
  return api.get(url, params);
}

export async function postRequest(url, body) {
  return api.post(url, body);
}
