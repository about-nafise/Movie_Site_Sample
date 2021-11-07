import { postRequest } from "../api";
const ROOT_URL = "https://61541b0c2473940017efabe4.mockapi.io/login";

export async function loginUser(dispatch, loginPayLoad) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await postRequest(ROOT_URL, loginPayLoad);
    let data = await response.data;
    if (data.username) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export function logOut(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  window.location.reload();
}
