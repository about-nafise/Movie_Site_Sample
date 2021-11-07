let userName = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";
let email = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).email
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
let gravatar = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).gravatar
  : "";
let phoneNumber = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).phone_number
  : "";

export const initialState = {
  userName: "" || userName,
  email: "" || email,
  token: "" || token,
  gravatar: "" || gravatar,
  phoneNumber: "" || phoneNumber,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        email: action.payload.email,
        userName: action.payload.username,
        token: action.payload.token,
        gravatar: action.payload.gravatar,
        phoneNumber: action.payload.phoneNumber,
      };
    case "LOGOUT":
      return {
        ...initialState,
        userName: "",
        email: "",
        token: "",
        gravatar: "",
        phoneNumber: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
