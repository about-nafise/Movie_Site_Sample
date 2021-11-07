import { useState } from "react";
import { loginUser, useAuthState, useAuthDispatch } from "../../../context";
import { Link, useHistory } from "react-router-dom";
import Style from "./style";

function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  document.title = "Login";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(dispatch, {
        email,
        password,
      });
      if (!response.username) {
        return;
      }
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Style>
      <div className="background d-flex flex-column align-items-center justify-content-center vh-100">
        <form className="p-5 rounded-3" onSubmit={handleLogin}>
          <div className="logo">
            <Link to="/">
              <img src="/assets/images/logo.jpg" alt="logo" />
            </Link>
          </div>
          <div>
            <input
              className="rounded-pill form-control px-3 py-1 my-2"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <input
              className="rounded-pill form-control px-3 py-1 my-2"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <button
              className="btn btn-primary w-100 rounded-pill mt-4"
              type="submit"
              disabled={loading}
            >
              login
            </button>
          </div>
        </form>
      </div>
    </Style>
  );
}

export default Login;
