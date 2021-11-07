function textDots(string, numberOfChar = 14) {
  if (typeof string === "string") {
    return `${string.slice(0, numberOfChar)} ${
      string.length > numberOfChar ? "..." : ""
    }`;
  } else {
    return string;
  }
}
export default textDots;

export const isloggedIn = () => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";
  if (token) {
    return true;
  } else {
    return false;
  }
};
